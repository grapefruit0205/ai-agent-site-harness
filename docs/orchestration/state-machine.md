# 단계 상태 머신

```mermaid
stateDiagram-v2
    state "계획됨" as planned
    state "작업 중" as active
    state "검증 중" as verifying
    state "검토 중" as reviewing
    state "복구 중" as recovering
    state "승인됨" as accepted
    state "병합됨" as merged
    state "배포됨" as deployed
    [*] --> planned
    planned --> active: 브랜치와 worktree 생성
    active --> verifying: 작업 에이전트가 완료 보고
    verifying --> reviewing: 모든 명령 통과
    verifying --> recovering: 명령 실패
    reviewing --> accepted: 검토자와 사람이 승인
    reviewing --> recovering: 검토자가 수정 요청
    recovering --> active: 복구 시도 시작
    accepted --> merged: 사람이 병합
    merged --> deployed: 프로덕션 수동 승인
```

## 규칙

- 실패한 검증은 실행 이력에 남긴다.
- 검토 에이전트는 작업 worktree를 수정할 수 없다.
- 승인된 단계라도 배포하지 않은 상태로 둘 수 있다.
- 배포는 AWS 상태를 바꾸고 비용을 발생시킬 수 있으므로 별도 승인을 요구한다.
- 인수 조건이나 `phase/` 브랜치가 없는 단계는 계약 검증에서 실패한다.
