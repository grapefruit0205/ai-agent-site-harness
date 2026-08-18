# Roles and permissions

| Role | Input | Allowed work | Required output |
| --- | --- | --- | --- |
| Human | Goal and constraints | Approve scope, merge, deployment, and exceptions | Decision record |
| Planner | Repository state and goal | Write or revise a phase contract | `docs/phases/phase-*.md` |
| Worker | One phase contract | Edit the assigned worktree and run declared checks | Commit and verification evidence |
| Reviewer | Worker diff and verification evidence | Inspect in a read-only sandbox | Accept, rework, or block decision |
| Recovery worker | Failed run and reviewer findings | Apply the smallest corrective change in a new attempt | New evidence without rewriting the failed attempt |

The orchestrator passes the phase body through standard input to `codex exec --json`. It uses `workspace-write` for workers and `read-only` for reviewers. The scripts never select `danger-full-access`.

The human owns merge and deployment decisions. Automated checks supply evidence; they do not transfer accountability to the model.
