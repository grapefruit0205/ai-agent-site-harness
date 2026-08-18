# Deployment proof checklist

실제 AWS 배포를 마친 뒤 아래 증거를 채우면 저장소가 설계 예제를 넘어 실행 결과를 보여주는 포트폴리오가 됩니다. 계정 ID, 버킷 이름, 인증서 ARN 등 민감하거나 식별 가능한 값은 필요한 부분만 남기고 가립니다.

## 1. Infrastructure identity

- Deployment date: `YYYY-MM-DD`
- AWS Region for S3: `ap-northeast-2`
- Custom domain: `lab.example.com` 또는 `not configured`
- Terraform commit: `<git SHA>`

## 2. Configuration evidence

- [ ] S3 `Block public access` 네 항목이 모두 `On`인 화면
- [ ] CloudFront origin에 OAC가 연결된 화면
- [ ] OAC의 signing behavior가 `always`, protocol이 `sigv4`인 화면
- [ ] 버킷 정책의 Principal이 `cloudfront.amazonaws.com`인 화면
- [ ] `AWS:SourceArn`이 한 CloudFront distribution ARN으로 제한된 화면

## 3. Runtime evidence

자격 증명이 없는 HTTP 요청으로 비교해야 합니다. 소유자 AWS 자격 증명으로 실행한 `aws s3api head-object`는 비공개 여부를 증명하지 못합니다.

```bash
# Expected: HTTP 403
curl -I "https://BUCKET.s3.REGION.amazonaws.com/index.html"

# Expected: HTTP 200
curl -I "https://DISTRIBUTION.cloudfront.net/"

# Expected after DNS connection: HTTP 200
curl -I "https://lab.example.com/"
```

결과를 아래에 붙입니다.

```text
Direct S3 response:
<paste redacted headers>

CloudFront response:
<paste redacted headers>
```

## 4. Teardown evidence

- [ ] CloudFront를 비활성화하고 삭제했는지 확인
- [ ] S3 버킷의 객체와 버전을 비운 뒤 삭제했는지 확인
- [ ] 사용하지 않는 ACM 인증서와 DNS 레코드를 정리했는지 확인
