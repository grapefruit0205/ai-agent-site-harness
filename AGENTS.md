# 저장소 작업 지침

## 작업 범위

- `docs/phases/phase-*.md`를 작업 계약으로 사용한다.
- 구현 브랜치는 `phase/` 아래에 만들고 단계마다 별도 Git worktree를 사용한다.
- 계획, 작업, 검토 산출물을 분리한다. 검토 에이전트는 작업 worktree를 수정하지 않는다.
- 사람의 명시적 승인 없이 병합, 배포, Terraform apply, CloudFront 무효화, DNS 변경을 실행하지 않는다.
- 새 인터랙티브 칼럼이나 FIELDNOTE를 설계할 때 `skills/build-interactive-editorial-site/SKILL.md`를 읽고 현재 작업에 필요한 reference만 추가로 읽는다.

## 검증

- 오케스트레이션 코드나 단계 계약을 바꾸면 `npm run verify:harness`를 실행한다.
- `frontend/` 아래 파일을 바꾸면 `npm run verify:frontend`를 실행한다.
- `infra/terraform/`을 바꾸면 Terraform 포맷 검사, backend 없는 초기화, validate, `terraform test`를 실행한다.
- 실패한 명령을 증거로 남긴다. 실패한 실행을 첫 시도 성공으로 고쳐 쓰지 않는다.

## 증거

- 단계 명세, 결정적 테스트 결과, 검토 결정, 복구 요약을 커밋한다.
- Codex 원본 JSONL, 자격 증명, Terraform 상태 파일, 환경 파일은 Git에 넣지 않는다.
- `README.md`의 주장은 검토자가 확인할 수 있는 커밋이나 파일에 연결한다.
