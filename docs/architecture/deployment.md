# Deployment architecture

```mermaid
flowchart LR
    U[Browser] -->|HTTPS| C[CloudFront]
    C -->|SigV4 through OAC| S[Private S3 origin]
    G[Gabia DNS] -->|CNAME| C
    A[ACM certificate in us-east-1] --> C
    T[Terraform] --> C
    T --> S
```

The S3 bucket blocks public access. Its policy grants `s3:GetObject` to the CloudFront service only when the request source matches the expected distribution ARN. The Terraform contract tests use a mocked AWS provider, so CI can verify this boundary without provisioning resources.

`deploy-manual.yml` builds on every manual request. It uploads files only when `perform_deploy` is true, the `production` environment approves the job, and the repository has the required AWS OIDC variables.
