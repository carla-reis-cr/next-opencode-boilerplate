# 🚀 Next.js + TypeScript + OpenCode ECC Harness

A professional boilerplate and open-source engineering harness designed to supercharge AI coding assistants (such as OpenCode and Claude) with **modular rules, atomic skills, static code analysis, and multi-provider model routing**.

Inspired by advanced AI harness architectures, this repository protects your API tokens and ensures that generated code strictly adheres to your stack's patterns (TypeScript, React, Next.js App Router, Tailwind, and Zod).

---

## 📂 Repository Architecture

```text
next-opencode-boilerplate/
├── .opencode/
│   ├── agents/             # Specialized agents (e.g., PRD generators)
│   ├── rules/              # Static architecture and typing guidelines
│   └── skills/             # Atomic and reusable skills (Zod, Server Actions, etc.)
├── scripts/
│   ├── analyze-repo-skills.ts # Code auditor & anti-pattern checker
│   ├── compile-harness.ts     # Unifying compiler for rules and skills
│   └── run-prd.ts             # Multi-provider parameterized PRD executor
├── src/
│   ├── app/                   # Next.js App Router
│   └── components/            # React components
├── prd.json                   # Parameterized task manifesto & AI routing
├── tsconfig.json
└── package.json
```

---

## ⚡ Prerequisites

1. **Node.js** (version 18 or higher)
2. **OpenCode** installed and configured in your environment.
3. **Ollama** running locally (optional, for free local models like Qwen 2.5 Coder).
4. API keys configured for your desired providers (e.g., Anthropic Claude).

---

## 🛠️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/SEU_USUARIO/next-opencode-boilerplate.git
cd next-opencode-boilerplate
npm install
```

---

## 🤖 Workflow & Harness Commands

This ecosystem is designed to run in smart engineering cycles:

### 1. Parameterized PRDs (`prd.json`)
The `prd.json` file centralizes project tasks and defines which AI/Provider executes each step, preventing expensive token waste on simple tasks.

```json
{
  "feature": "Sample Module",
  "tasks": [
    {
      "id": 1,
      "title": "Create base types and TypeScript interfaces",
      "provider": "ollama",
      "model": "qwen2.5-coder:7b"
    },
    {
      "id": 2,
      "title": "Develop Server Actions architecture with Zod validation",
      "provider": "anthropic",
      "model": "claude-3-5-sonnet-20241022"
    }
  ]
}
```

### 2. Multi-Provider Task Execution
Run tasks while automatically splitting workloads between local models (zero cost) and Claude (critical logic):
```bash
npm run prd:run
```

### 3. Code & Pattern Auditing
Scan the repository for anti-patterns (such as the use of `any` or deviations from stack rules):
```bash
npm run ai:analyze
```

### 4. Compile AI Harness
Unify all modular rules and skills for your assistant:
```bash
npm run harness:build
```

---

## 🧠 Included Skills
Pre-configured with essential atomic skills:
* **`zod-server-actions`**: Mandatory input validation and standardized error handling.
* **`react-client-server-boundaries`**: Strict separation between Server and Client Components in App Router.
* **`testing-standards`**: Conventions for isolated unit testing.

---

## 📜 License
Distributed under the MIT License. Feel free to clone, adapt, and use as an official base for your projects!