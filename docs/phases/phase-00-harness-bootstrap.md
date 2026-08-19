---
id: phase-00
title: 원본 이력을 보존하는 에이전트 하네스 초기 구성
status: accepted
base: main
branch: phase/00-harness-bootstrap
worktree: ../ai-agent-site-harness-phase-00
verify:
  - npm run verify:harness
  - npm run verify:frontend
  - terraform -chdir=infra/terraform fmt -check -recursive
  - terraform -chdir=infra/terraform init -backend=false -input=false
  - terraform -chdir=infra/terraform validate
  - terraform -chdir=infra/terraform test
acceptance:
  - 하네스 이력에서 프론트엔드와 인프라 원본 커밋에 계속 도달할 수 있다
  - 작업 및 검토 에이전트의 권한이 코드로 정의되고 테스트로 검증된다
  - 단계 계약과 검증 증거 및 복구 지표를 재현할 수 있다
  - Pull Request 워크플로가 배포 없이 결정적 검증을 실행한다
  - 프로덕션 배포는 수동 승인 대상으로 남는다
---

# 목표

칼럼을 구현하고 검증하고 복구하고 배포한 과정을 보여주는 포트폴리오 저장소를 만든다. 최종 파일만 복사하지 않고 원본 이력을 보존한다.

## 입력

- 프론트엔드 `main@873ae0c524a87f2a5bfeaf062fcb7c4b8f0069d1`
- 인프라 `main@b033f25177043d62d42f9a4ae31fa10cf24dd7cb`
- 사용자가 요청한 저장소 구조와 포트폴리오 서사

## 경계

- 사이트를 배포하거나 AWS 리소스를 변경하지 않는다.
- 인프라 체크아웃의 미커밋 파일을 포함하지 않는다.
- 가져온 비공개 이력의 공개 적합성을 검토할 때까지 새 GitHub 저장소를 비공개로 유지한다.
