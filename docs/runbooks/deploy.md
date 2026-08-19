# 프로덕션 수동 배포

Pull Request 워크플로는 배포하지 않는다. `Deploy production manually` 워크플로에는 다음 항목이 필요하다.

- 수동 `workflow_dispatch` 요청
- `perform_deploy: true`
- GitHub `production` 환경 승인
- 저장소 변수 `AWS_ROLE_ARN`, `AWS_REGION`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`
- GitHub OIDC를 신뢰하며 필요한 S3 업로드와 CloudFront 무효화 작업만 허용하는 AWS 역할

초기 구성은 GitHub 환경과 필수 검토자 및 AWS OIDC 역할을 만들지 않는다. 첫 프로덕션 실행 전에 해당 통제를 설정하고 검토한다.

워크플로는 `frontend/dist/client`를 빌드하고 비공개 원본 버킷에 업로드한 뒤 CloudFront 무효화를 요청한다. Terraform은 실행하지 않는다.

배포 후 두 경계를 확인한다.

1. S3 객체에 직접 접근하면 `403`을 반환한다.
2. 사용자 지정 CloudFront 도메인은 `200`을 반환한다.

응답 헤더를 기록하고 민감정보를 제거한 배포 증거를 커밋한다. 역할 자격 증명, Terraform 상태 파일, 저장한 plan은 커밋하지 않는다.
