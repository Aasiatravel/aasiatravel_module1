# AI-Agent Onboarding Notes - Aasia Travel

![Agent Context](https://img.shields.io/badge/Agent-Onboarding-3178C6?style=for-the-badge)
![Code Standards](https://img.shields.io/badge/Standards-Strict-FF6B00?style=for-the-badge)
![Verification](https://img.shields.io/badge/Checks-Lint_%26_Build-22C55E?style=for-the-badge)

Welcome to the Aasia Travel repository! This document contains context, standards, key commands, and directory mappings optimized for AI-agent pairing.

---

## File Resolution Maps

| Task Objective       | Target File                                                                                         | Description                                                                       |
| :------------------- | :-------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------- |
| **Modify Packages**  | [packages.ts](file:///c:/SharedData/Projects/Aasia Travel/aasiatravel_module1/src/data/packages.ts) | Core array database containing flight codes, hotel stays, steps, and pricing keys |
| **Change Recipient** | [site.ts](file:///c:/SharedData/Projects/Aasia Travel/aasiatravel_module1/src/config/site.ts)       | Site metadata profile outlining email, phone, and address                         |
| **Update Templates** | [whatsapp.ts](file:///c:/SharedData/Projects/Aasia Travel/aasiatravel_module1/src/data/whatsapp.ts) | Static message constants and text formatter layouts                               |

---

## Key Development Commands

| Command          | Action                     | Output / Behavior                                          |
| :--------------- | :------------------------- | :--------------------------------------------------------- |
| `pnpm dev`       | Start development server   | Launches Next.js locally on port `3000`                    |
| `pnpm dev:turbo` | Start Turbopack dev server | Fast incremental module bundling                           |
| `pnpm build`     | Compile dynamic pages      | Performs static site generation (SSG) to `.next/`          |
| `pnpm check`     | Run all validation checks  | Sequentially runs linting, formatting, and type checks     |
| `pnpm lint`      | Run ESLint checks          | Analyzes syntax rules and React hooks boundaries           |
| `pnpm format`    | Run Prettier formatter     | Formats code in-place                                      |
| `pnpm typecheck` | Run tsc check              | Performs dry-run static type checks without emitting files |

---

## Codebase Map & Directory Layout

```text
aasiatravel_module1/
├── src/
│   ├── app/                              # Route-level definitions & layout structure
│   │   ├── packages/                     # Dynamic package routes
│   │   │   └── [id]/                     # Dynamic detail views (Page, Skeleton, 404)
│   │   └── globals.css                   # Global Tailwind imports & custom theme keys
│   │
│   ├── components/                       # Modular page layout components
│   │   ├── landing/                      # Landing page sections (Hero, Cards, Testimonials)
│   │   ├── layout/                       # Shared navigation layouts (Navbar, Footer, Menu)
│   │   └── package-details/              # Detailed tabs (calculator, hotel, flights)
│   │
│   ├── data/                             # Mock databases & message constants
│   │   ├── packages.ts                   # Static package items schema
│   │   └── whatsapp.ts                   # Outgoing text template formatters
│   │
│   ├── types/                            # TypeScript interface entries
│   │   ├── common.ts                     # Layout configuration types
│   │   └── whatsapp.ts                   # WhatsApp payload interfaces
│   │
│   └── lib/                              # Reusable library helper utilities
│       ├── utils.ts                      # Common string/price utilities
│       └── whatsapp.ts                   # URL building functions
```

---

## Technical Standards to Enforce

### 1. Ref Render-Access Guard

Never access ref properties (like `ref.current`) inside render bodies or JSX parameters. Doing so causes linting exceptions in the `react-hooks/refs` plugin.

- **Bad**: `ref={scrollState.containerRef}` (property access inside render loop)
- **Good**: `const { containerRef } = useScrollContainer(); ... ref={containerRef}`

### 2. Strict Typings

Never use `any` type annotations. All package structures must strictly adhere to the types declared under [src/types/](file:///c:/SharedData/Projects/Aasia Travel/aasiatravel_module1/src/types).

### 3. No Scaffolding Noise

Do **NOT** add stub comments (like `// TODO: implement`) inside components or helpers. Out-of-scope roadmaps must be documented in [README.md](file:///c:/SharedData/Projects/Aasia Travel/aasiatravel_module1/README.md) only.

### 4. WhatsApp Message Architecture

- **Decoupled Text**: Never write multiline template literals or message text templates inside component JSX or helper logic.
- **Formatters**: Store all formatters in [data/whatsapp.ts](file:///c:/SharedData/Projects/Aasia Travel/aasiatravel_module1/src/data/whatsapp.ts) and reference them inside [lib/whatsapp.ts](file:///c:/SharedData/Projects/Aasia Travel/aasiatravel_module1/src/lib/whatsapp.ts) to keep the layout layer clean.
- **Text Formatting**: Format labels (e.g. `*Price:*`) in bold using asterisks and list details using Unicode bullets (`•`) to comply with WhatsApp markdown.

### 5. React Component Boundaries

- **State & Effects**: Any file using React state (`useState`, `useEffect`) or event handlers (`onClick`, `onChange`) must explicitly start with `'use client';` at the top.
- **Server Components**: Keep components as Server Components by default unless client-side interactivity is requested.
