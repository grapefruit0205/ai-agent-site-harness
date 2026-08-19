---
id: phase-02
title: 같은 유형의 작업을 하네스로 실행해 비교
status: planned
base: main
branch: phase/02-harness-comparison
worktree: .worktrees/phase-02
verify:
  - npm run verify:harness
  - npm run verify:frontend
acceptance:
  - 계획, 작업, 검증, 검토, 복구 산출물을 서로 분리한다
  - 실행 결과로 민감정보를 제거한 지표 요약을 만든다
  - 한 번의 실험을 일반화하지 않고 측정값만 보고한다
---

# 목표

Phase 01과 비교 가능한 작업을 worktree 격리, 결정적 검증, 읽기 전용 검토와 함께 실행한다. 두 실행을 통계적 기준이 아닌 사례 연구로 비교한다.
