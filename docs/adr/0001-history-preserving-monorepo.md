# ADR 0001: Preserve both source histories in a separate harness repository

Status: accepted

## Context

The interactive article and its AWS infrastructure began in separate Git repositories. Copying only their latest files would hide the sequence of implementation, testing, design changes, failure, recovery, and deployment.

## Decision

Create a third repository for the harness. Import each source branch as a merge parent and place its tree under `frontend/` or `infra/`.

The bootstrap commits connect:

- frontend source `873ae0c524a87f2a5bfeaf062fcb7c4b8f0069d1`
- infrastructure source `b033f25177043d62d42f9a4ae31fa10cf24dd7cb`

The infrastructure import uses the fetched remote commit. Six uncommitted files in the local infrastructure checkout were excluded.

## Consequences

`git log --graph --all` shows both original histories. Reviewers can trace claims to source commits. Future source updates require another explicit merge or subtree-style synchronization rather than an unrecorded file copy.
