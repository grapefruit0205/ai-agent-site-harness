mock_provider "aws" {
  override_resource {
    target          = aws_s3_bucket.site
    override_during = plan
    values = {
      arn                         = "arn:aws:s3:::oac-portfolio-test"
      bucket                      = "oac-portfolio-test"
      bucket_regional_domain_name = "oac-portfolio-test.s3.ap-northeast-2.amazonaws.com"
      id                          = "oac-portfolio-test"
    }
  }

  override_resource {
    target          = aws_cloudfront_origin_access_control.site
    override_during = plan
    values = {
      id = "E1OACEXAMPLE"
    }
  }

  override_resource {
    target          = aws_cloudfront_distribution.site
    override_during = plan
    values = {
      arn         = "arn:aws:cloudfront::123456789012:distribution/E1EXAMPLE"
      domain_name = "d111111abcdef8.cloudfront.net"
      id          = "E1EXAMPLE"
    }
  }
}

variables {
  project_name = "oac-portfolio-test"
  aws_region   = "ap-northeast-2"
}

run "keeps_the_origin_bucket_private" {
  command = plan

  assert {
    condition = (
      aws_s3_bucket_public_access_block.site.block_public_acls &&
      aws_s3_bucket_public_access_block.site.block_public_policy &&
      aws_s3_bucket_public_access_block.site.ignore_public_acls &&
      aws_s3_bucket_public_access_block.site.restrict_public_buckets
    )
    error_message = "All four S3 Block Public Access controls must be enabled."
  }

  assert {
    condition     = one(aws_s3_bucket_ownership_controls.site.rule).object_ownership == "BucketOwnerEnforced"
    error_message = "The origin bucket must disable ACLs with BucketOwnerEnforced ownership."
  }

  assert {
    condition     = one(one(aws_s3_bucket_server_side_encryption_configuration.site.rule).apply_server_side_encryption_by_default).sse_algorithm == "AES256"
    error_message = "The origin bucket must enable server-side encryption."
  }
}

run "connects_cloudfront_to_s3_with_oac" {
  command = plan

  assert {
    condition = (
      aws_cloudfront_origin_access_control.site.origin_access_control_origin_type == "s3" &&
      aws_cloudfront_origin_access_control.site.signing_behavior == "always" &&
      aws_cloudfront_origin_access_control.site.signing_protocol == "sigv4"
    )
    error_message = "OAC must always sign S3 origin requests with SigV4."
  }

  assert {
    condition = (
      one(aws_cloudfront_distribution.site.origin).domain_name == aws_s3_bucket.site.bucket_regional_domain_name &&
      one(aws_cloudfront_distribution.site.origin).origin_access_control_id == aws_cloudfront_origin_access_control.site.id
    )
    error_message = "CloudFront must use the S3 REST origin and attach the OAC."
  }

  assert {
    condition     = one(aws_cloudfront_distribution.site.default_cache_behavior).viewer_protocol_policy == "redirect-to-https"
    error_message = "Viewers must be redirected to HTTPS."
  }
}

run "allows_only_the_expected_cloudfront_distribution_to_read_objects" {
  command = plan

  assert {
    condition     = jsondecode(aws_s3_bucket_policy.site.policy).Statement[0].Principal.Service == "cloudfront.amazonaws.com"
    error_message = "The read policy principal must be the CloudFront service."
  }

  assert {
    condition     = jsondecode(aws_s3_bucket_policy.site.policy).Statement[0].Action == "s3:GetObject"
    error_message = "CloudFront must receive read-only object access."
  }

  assert {
    condition     = jsondecode(aws_s3_bucket_policy.site.policy).Statement[0].Condition.StringEquals["AWS:SourceArn"] == aws_cloudfront_distribution.site.arn
    error_message = "The bucket policy must be scoped to this distribution ARN."
  }
}

run "uses_the_default_cloudfront_certificate_without_a_custom_domain" {
  command = plan

  assert {
    condition     = length(aws_cloudfront_distribution.site.aliases) == 0
    error_message = "Aliases must remain empty when no custom domain is supplied."
  }

  assert {
    condition     = one(aws_cloudfront_distribution.site.viewer_certificate).cloudfront_default_certificate
    error_message = "CloudFront's default certificate must be used without a custom domain."
  }
}

run "uses_acm_for_a_gabia_managed_custom_domain" {
  command = plan

  variables {
    custom_domain       = "lab.example.com"
    acm_certificate_arn = "arn:aws:acm:us-east-1:123456789012:certificate/00000000-0000-4000-8000-000000000000"
  }

  assert {
    condition     = contains(aws_cloudfront_distribution.site.aliases, "lab.example.com")
    error_message = "The custom domain must be registered as a CloudFront alias."
  }

  assert {
    condition     = one(aws_cloudfront_distribution.site.viewer_certificate).acm_certificate_arn == var.acm_certificate_arn
    error_message = "The custom domain must use the supplied us-east-1 ACM certificate."
  }
}
