# Phase state machine

```mermaid
stateDiagram-v2
    [*] --> planned
    planned --> active: branch and worktree created
    active --> verifying: worker reports completion
    verifying --> reviewing: all commands pass
    verifying --> recovering: command fails
    reviewing --> accepted: reviewer and human approve
    reviewing --> recovering: reviewer requests changes
    recovering --> active: recovery attempt starts
    accepted --> merged: human merges
    merged --> deployed: manual production gate
```

## Rules

- A failed verification remains in the run history.
- A reviewer cannot edit the worker worktree.
- An accepted phase can still remain undeployed.
- Deployment requires a separate approval because it changes AWS state and can incur cost.
- A phase that lacks acceptance criteria or a `phase/` branch fails contract validation.
