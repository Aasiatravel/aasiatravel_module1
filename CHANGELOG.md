# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Added `.github/workflows/ci.yml` for automated lint, format checking, typechecking, and testing.
- Added `.nvmrc` to pin the Node.js version to 22.
- Added a placeholder `"test"` script in `package.json` for CI validation.
- Dynamic WhatsApp integration for direct booking and cost estimation calculations.
- Reusable types and static data formats decoupled from components.
- Live timezone clocks for Makkah time zone alignment.
- Confirmation card systems for flight layouts and hotel stay distances.
- lenis smooth easing scrolls.

### Changed

- Refactored `useMediaQuery` hook to use React 18+ `useSyncExternalStore` for clean, hydration-safe window matchMedia subscriptions.
- Configured `next.config.ts` with `reactStrictMode: true`, `poweredByHeader: false`, and `images.unoptimized: true` to optimize performance, security, and VPS deployment efficiency.

### Fixed

- Replaced unsafe `any` assertions on `window.lenis` with type-safe `unknown` casts to resolve library type conflicts.
- Removed all unnecessary comments under `src/` (excluding the `data/` folder) to clean up the code.
- Fixed unused catch parameter `(e)` warning in `HeroSection.tsx`.
