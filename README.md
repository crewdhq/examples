# Crewd Examples & Showcase

Official examples and starter templates showcasing [Crewd](https://crewd.dev) — the package manager for prompt-defined AI subagents, skills, and squads.

[![Website](https://img.shields.io/badge/website-crewd.dev-blue)](https://crewd.dev)
[![Registry](https://img.shields.io/badge/registry-live-success)](https://crewd.dev/explore)
[![CLI](https://img.shields.io/badge/cli-homebrew-orange)](https://github.com/crewdhq/homebrew-tap)

## Showcase Projects

| Project | Stack | Configured Hosts | Hired Crew |
|---|---|---|---|
| [**`nextjs-saas`**](./nextjs-saas) | Next.js 15, React 19, TypeScript | Claude Code, Cursor, Gemini CLI, OpenAI Codex | `@crewd/code-reviewer`, `@crewd/security-auditor` |

## Quick Start

```bash
# Install the Crewd CLI
brew install crewdhq/tap/crewd

# Browse into any example
cd nextjs-saas

# Verify agent setup across all 4 hosts
crewd doctor
```

## How It Works

Crewd takes versioned agent packages from the registry and compiles them directly into native instructions for each tool in your team:
- **Claude Code**: `.claude/agents/*.md` & `.claude/skills/`
- **Cursor**: `.cursor/rules/*.mdc`
- **Gemini CLI**: `GEMINI.md` & `.gemini/skills/`
- **OpenAI Codex**: `CODEX.md` & `.codex/skills/`
- **Lockfile & Reproducibility**: `crewd.json` and `crewd.lock` ensure every team member has identical agent versions.
