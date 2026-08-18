# Frontend dependency audit snapshot

Date: 2026-08-18 KST

Command:

```powershell
npm audit --prefix frontend --json
```

The imported lock file reported 701 dependencies and 20 advisories:

| Severity | Count |
| --- | ---: |
| Low | 1 |
| Moderate | 6 |
| High | 13 |
| Critical | 0 |

The bootstrap phase did not run `npm audit fix`. An automatic fix can change dependency versions and application behavior, so remediation belongs in a separate phase with build and regression checks.
