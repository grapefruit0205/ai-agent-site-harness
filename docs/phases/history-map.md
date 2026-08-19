# Source history map

This map separates evidence visible in Git from the harness workflow introduced later.

## Frontend history

| Commit | Evidence |
| --- | --- |
| `166b6b1` | Interactive article repository initialized |
| `5430ae9` | First complete editorial implementation |
| `e1fa9e1` | Rendering and build verification added |
| `e4c7cfb` | Interactive book experience added |
| `66399e8` | Static export refined |
| `49f749b` | Six-stage permission verification simulation added |
| `738604d` | Mobile clipping regression fixed |
| `7107ccd` | Article split into focused fieldnotes |
| `26489b6` | Editorial restructuring attempted |
| `40b571b` | The restructuring was reverted, providing a concrete recovery record |
| `e467fd0` | Agent primer and chapter sequence refined after recovery |
| `873ae0c` | Current imported frontend source |

The original frontend repository has one visible branch, `main`, and one working tree at import time. Git does not prove that earlier changes used worker branches or worktrees.

## Infrastructure history

| Commit | Evidence |
| --- | --- |
| `140b6b0` | Private S3 and CloudFront OAC reference architecture |
| `0fa8f64` | RAG documentation and an MCP server added |
| `0321abc` | Runtime deployment proof for `article.tripjunseok.site` |
| `b033f25` | Latest imported infrastructure branch after demo-site synchronization |

The local infrastructure checkout had six modified files when the harness was created. The import fetched `infra-source/main@b033f25`; those uncommitted local changes were not copied.

## Harness history

The harness begins with `phase/00-harness-bootstrap`. From this point, phase files, worktrees, verification artifacts, review decisions, and recovery counts are new evidence produced by this repository.
