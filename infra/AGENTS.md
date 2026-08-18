# Infrastructure instructions

- Keep the S3 origin private and preserve all four Block Public Access settings.
- Attach CloudFront through OAC with SigV4 and restrict `s3:GetObject` to the expected distribution ARN.
- Never commit state, plans, credentials, certificate secrets, or account-specific role credentials.
- Use `terraform fmt -check -recursive`, `terraform init -backend=false -input=false`, `terraform validate`, and `terraform test` for review.
- Do not run `terraform apply` or `terraform destroy` without explicit human approval.
