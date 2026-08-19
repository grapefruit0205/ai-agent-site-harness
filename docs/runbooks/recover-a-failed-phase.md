# 실패한 단계 복구

1. 실패한 검증 JSON을 수정하지 않고 보존한다.
2. 실패한 명령, 종료 코드, 관련 출력, 추정 원인을 기록한다.
3. 같은 단계 브랜치나 별도 `phase/<id>-recovery-<n>` 브랜치에서 새 시도를 만든다.
4. 동작을 바꾸기 전에 회귀 테스트를 추가한다.
5. 필요한 최소 변경을 적용하고 선언된 검증 명령을 모두 다시 실행한다.
6. 모든 시도 기록을 `collect-metrics.mjs`에 전달한다.

```powershell
node tools/orchestration/collect-metrics.mjs attempts.json `
  --output docs/orchestration/runs/phase-01-summary.json
```

첫 실패를 삭제하거나 복구 결과를 첫 시도 성공으로 바꾸지 않는다.
