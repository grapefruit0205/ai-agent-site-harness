output "origin_bucket_name" {
  description = "Private S3 origin bucket."
  value       = aws_s3_bucket.site.bucket
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID used for cache invalidations."
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_distribution_arn" {
  description = "Distribution ARN referenced by the least-privilege S3 bucket policy."
  value       = aws_cloudfront_distribution.site.arn
}

output "cloudfront_domain_name" {
  description = "CloudFront hostname available immediately after deployment."
  value       = aws_cloudfront_distribution.site.domain_name
}

output "origin_access_control_id" {
  description = "CloudFront Origin Access Control ID."
  value       = aws_cloudfront_origin_access_control.site.id
}

output "gabia_cname_record" {
  description = "CNAME to add in Gabia after supplying custom_domain and an issued ACM certificate."
  value = var.custom_domain == null ? null : {
    type  = "CNAME"
    name  = var.custom_domain
    value = "${aws_cloudfront_distribution.site.domain_name}."
  }
}
