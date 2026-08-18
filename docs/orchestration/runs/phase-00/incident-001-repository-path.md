# Incident 001: Repository initialized in the parent directory

Date: 2026-08-18 KST

## Impact

The bootstrap command created an empty `.git` directory in the date-level parent folder instead of the new harness folder. It did not change either source repository or any project file. The harness import had not started.

## Detection

`git init` reported a path ending at `2026-08-18/.git`. A boundary check then showed:

- the parent folder had a new repository with no commits
- the intended harness directory had no `.git`
- both source repositories still pointed to their original roots and commits

## Cause

The PowerShell command assigned the intended target to a variable but invoked `git init` without that path. Git used the command's working directory.

## Recovery

The destructive deletion command was blocked by the execution safety policy. The empty `.git` directory was moved to a recoverable quarantine path in the same date folder. A second check confirmed that the parent was no longer a Git repository. The harness was then initialized with `git -C <validated-target> init -b main`.

## Prevention

- Resolve and print the target before repository mutations.
- Pass the target through `git -C` rather than relying on shell location.
- Stop when Git reports a root different from the expected path.
- Keep the initialization event in phase metrics as a recovery rather than rewriting the phase as a first-pass success.
