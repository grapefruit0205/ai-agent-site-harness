# 인프라 작업 지침

- S3 원본을 비공개로 유지하고 Block Public Access 설정 4개를 모두 보존한다.
- CloudFront는 SigV4 방식의 OAC로 연결하고 `s3:GetObject`를 지정한 배포 ARN으로 제한한다.
- 상태 파일, plan, 자격 증명, 인증서 비밀정보, 계정별 역할 자격 증명을 커밋하지 않는다.
- 검토할 때 `terraform fmt -check -recursive`, `terraform init -backend=false -input=false`, `terraform validate`, `terraform test`를 실행한다.
- 사람의 명시적 승인 없이 `terraform apply`나 `terraform destroy`를 실행하지 않는다.
