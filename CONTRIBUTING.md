# Contributing Guidelines - Aasia Travel

![GitHub Contributors](https://img.shields.io/badge/Contributions-Welcome-22C55E?style=for-the-badge)
![Commit Style](https://img.shields.io/badge/Commits-Conventional-FF6B00?style=for-the-badge)
![Code Style](https://img.shields.io/badge/Format-Prettier-000000?style=for-the-badge)

Thank you for contributing to Aasia Travel. Please review these developer guidelines before opening a Pull Request.

---

## Technical Onboarding Roadmap

| Step  | Action                          | Command        | Output / Expected Result                                                |
| :---- | :------------------------------ | :------------- | :---------------------------------------------------------------------- |
| **1** | Clone and run dependency check  | `pnpm install` | Installs node modules based on `pnpm-lock.yaml`                         |
| **2** | Launch local server             | `pnpm dev`     | Next.js server starts on [http://localhost:3000](http://localhost:3000) |
| **3** | Compile dynamic templates       | `pnpm build`   | Triggers SSG compile step to verify code integrity                      |
| **4** | Run linting & formatting checks | `pnpm check`   | Runs full suite of formatting, typing, and linting                      |

---

## Commit Guidelines

We enforce the **Conventional Commits** standard for all pull requests. Commit messages must conform to the template:

```text
<type>(<scope>): <description>

[optional body]
```

### Commit Types

| Type       | When to Use                                 | Example                                            |
| :--------- | :------------------------------------------ | :------------------------------------------------- |
| `feat`     | A new visual component or logic hook        | `feat(calculator): add room sharing selector`      |
| `fix`      | A bug fix or lint correction                | `fix(ref): destructure scrollState before render`  |
| `docs`     | Modifying markdown files or comments        | `docs(readme): add deploy targets table`           |
| `style`    | Formatting corrections                      | `style(format): run prettier across footers`       |
| `refactor` | Code restructuring without feature addition | `refactor(whatsapp): move messages to data folder` |
| `perf`     | Easing configuration optimizations          | `perf(scroll): update lenis smoothing parameters`  |

---

## Pull Request Checklist

Before submitting a Pull Request, please ensure you satisfy the checklist below:

- [ ] Run `pnpm check` and verify that ESLint returns zero errors.
- [ ] Pre-compile the app locally with `pnpm build` to confirm no static rendering exceptions.
- [ ] Verify that all new interfaces are exported globally in `src/types/index.ts`.
- [ ] Ensure no realistic tokens or credentials exist inside `.env.example` or documentation.
