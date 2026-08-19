---
id: phase-01
title: 단일 코딩 에이전트 작업의 기준선 측정
status: planned
base: main
branch: phase/01-baseline-measurement
worktree: .worktrees/phase-01
verify:
  - npm run verify:harness
acceptance:
  - 범위가 제한된 프론트엔드 작업 하나를 하네스 없이 실행하고 비공개 프롬프트를 제외해 기록한다
  - 재작업 횟수와 소요 시간 및 테스트 결과와 사람의 개입 횟수를 기록한다
  - 기준선 작업과 하네스 작업에 비교 가능한 인수 조건을 사용한다
---

# 목표

작은 UI 또는 문서 변경 하나의 비교 기준을 만든다. 현재의 단일 세션 방식을 측정하며 Git으로 증명할 수 없는 과거 기준선을 주장하지 않는다.
