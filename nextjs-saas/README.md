# Next.js SaaS Starter with Crewd AI Crew

This is a production-ready Next.js SaaS starter preconfigured with an AI development crew managed by [Crewd](https://crewd.dev).

## AI Crew Configuration

This repository includes two AI subagents and four shared skills compiled natively for **Claude Code**, **Cursor**, **Gemini CLI**, and **OpenAI Codex**:

### Agents Hired
- **`@crewd/code-reviewer`** (`v1.0.0`): Reviews pull requests for correctness, performance, and readability.
- **`@crewd/security-auditor`** (`v1.0.0`): Scans for OWASP Top 10 vulnerabilities, secrets, and auth security flaws.

### Bundled Skills
- **`@crewd/owasp-top10`**: Standardized OWASP checklist and secure coding patterns.
- **`@crewd/pr-template`**: Pull request structure and reviewer notes format.
- **`@crewd/review-checklist`**: Systematic multi-pass review instructions.
- **`@crewd/threat-modeling`**: Threat analysis heuristics for APIs and authentication endpoints.

## Multi-Host Native Compilation

Crewd compiles once to native configuration for your team's tools:
- **Claude Code**: `.claude/agents/*.md` and `.claude/skills/`
- **Cursor**: `.cursor/rules/*.mdc`
- **Gemini CLI**: `GEMINI.md` and `.gemini/skills/`
- **OpenAI Codex**: `CODEX.md` and `.codex/skills/`

## How to Reproduce from Scratch

```bash
# 1. Install Crewd CLI
brew install crewdhq/tap/crewd

# 2. Initialize in your project
crewd init

# 3. Hire the agents
crewd hire @crewd/code-reviewer
crewd hire @crewd/security-auditor

# 4. Check configuration health
crewd doctor
```
