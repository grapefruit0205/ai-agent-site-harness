# Manual production deployment

Pull request workflows do not deploy. The `Deploy production manually` workflow requires:

- a manual `workflow_dispatch` request
- `perform_deploy: true`
- approval for the GitHub `production` environment
- repository variables `AWS_ROLE_ARN`, `AWS_REGION`, `S3_BUCKET`, and `CLOUDFRONT_DISTRIBUTION_ID`
- an AWS role that trusts GitHub OIDC and grants only the required S3 upload and CloudFront invalidation actions

The workflow builds `frontend/dist/client`, uploads it to the private origin bucket, then requests a CloudFront invalidation. It does not run Terraform.

After deployment, verify both boundaries:

1. direct S3 object access returns `403`
2. the custom CloudFront domain returns `200`

Record response headers and commit a sanitized deployment proof. Never commit the role credentials, Terraform state, or saved plans.
