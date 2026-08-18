# Deployment proof checklist

실제 AWS 배포를 마친 뒤 아래 증거를 채워 저장소가 설계 예제를 넘어 실행 결과를 완벽히 증명하는 프로덕션 레퍼런스 포트폴리오입니다.

---

## 1. Infrastructure identity

- Deployment date: `2026-08-18`
- AWS Region for S3: `ap-northeast-2`
- Custom domain: `article.tripjunseok.site`
- CloudFront distribution domain: `do6k0bqecx3zb.cloudfront.net`
- Distribution ID: `E1LISI955T6HIK`
- S3 Bucket Name: `ai-agent-article-891376981416-ap-northeast-2`
- Terraform commit: `e8ed248`

---

## 2. Configuration evidence

- [x] S3 `Block public access` 네 항목이 모두 `On` (완전 비공개 격리)
- [x] CloudFront origin에 Origin Access Control (OAC) 정상 연결
- [x] OAC signing behavior: `always`, protocol: `sigv4`
- [x] 버킷 정책의 Principal: `cloudfront.amazonaws.com`
- [x] `AWS:SourceArn` 조건이 CloudFront 배포 ARN(`arn:aws:cloudfront::891376981416:distribution/E1LISI955T6HIK`)으로 제한됨
- [x] ACM SSL/TLS 인증서: `us-east-1` (TLSv1.2_2021 보안 프로토콜)

---

## 3. Runtime evidence

자격 증명이 없는 일반 HTTP 요청으로 비교 검증한 결과입니다.

```bash
# 1. Direct S3 Request (Expected: HTTP 403 Forbidden)
curl -I "https://ai-agent-article-891376981416-ap-northeast-2.s3.ap-northeast-2.amazonaws.com/index.html"

# 2. Custom Domain with CloudFront OAC (Expected: HTTP 200 OK)
curl -I "https://article.tripjunseok.site/"
```

### 실제 응답 헤더 비교

```text
[1. Direct S3 Response]
HTTP/1.1 403 Forbidden
x-amz-request-id: F3WP457W3RAVFXQA
Content-Type: application/xml
Server: AmazonS3

[2. CloudFront Custom Domain Response]
HTTP/1.1 200 OK
Content-Type: text/html
Connection: keep-alive
Server: AmazonS3
X-Cache: Hit from cloudfront
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
X-XSS-Protection: 1; mode=block
```

---

## 4. Teardown guidance

실습 리소스를 제거할 때는 S3 버킷의 객체와 버전을 비운 뒤 `terraform destroy`를 실행합니다.
