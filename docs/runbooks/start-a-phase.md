# 단계 시작

1. `docs/phases/` 아래에 단계 파일을 만든다. YAML frontmatter, 목표 하나, 명시적 경계, 검증 명령, 인수 조건을 포함한다.
2. 모든 단계 계약을 검증한다.

```powershell
npm run validate:phases
```

3. 단계 문서에 선언한 브랜치와 worktree를 만든다.

```powershell
node tools/orchestration/new-phase.mjs docs/phases/phase-01-baseline-measurement.md
```

4. Codex를 시작하지 않고 작업 에이전트 실행 명령을 확인한다.

```powershell
node tools/orchestration/run-phase.mjs docs/phases/phase-01-baseline-measurement.md --dry-run
```

5. 대상 worktree와 권한이 맞는지 확인한 뒤에만 `--dry-run` 없이 실행한다. 현재 작업 에이전트 sandbox는 `workspace-write`다. 작업 지침상 병합하거나 배포할 수 없다.
