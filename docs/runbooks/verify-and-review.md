# 단계 검증과 검토

단계에 선언한 결정적 명령을 실행하고 Git에 포함하지 않는 원본 로그 경로에 결과를 저장한다.

```powershell
node tools/orchestration/verify-phase.mjs docs/phases/phase-01-baseline-measurement.md `
  --output .harness/runs/raw/phase-01-verification.json
```

검토를 요청하기 전에 JSON을 확인한다. 명령 하나라도 실패하면 검토 단계로 넘기지 않는다.

검토 에이전트 실행 명령을 미리 확인한다.

```powershell
node tools/orchestration/run-phase.mjs docs/phases/phase-01-baseline-measurement.md `
  --role reviewer `
  --dry-run
```

검토 에이전트는 읽기 전용 sandbox에서 실행한다. 모델의 원본 추론 대신 결정 요약을 커밋한다. 사람은 diff, 검증 산출물, 검토 결과를 확인한 뒤 병합한다.
