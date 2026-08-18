# ADR 0003: Gate merges with deterministic checks and an independent review

Status: accepted

## Context

An implementation agent can report completion even when a build, test, responsive layout, or infrastructure policy still fails. Model self-evaluation cannot replace executable evidence.

## Decision

Each phase lists verification commands and acceptance criteria. `verify-phase.mjs` runs every command and writes exit codes, stdout, and stderr to a JSON artifact. A reviewer runs read-only. Failed gates create a new recovery attempt; they are not amended into a first-pass success.

## Consequences

The harness can measure first-pass acceptance, recovery count, human interventions, and final test state. Raw model JSONL remains local because it can contain machine paths or sensitive context. Sanitized summaries may be committed.
