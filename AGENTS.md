# Repository Guidelines

This is a personal Astro/Svelte blog, not the upstream Firefly theme.
Preserve the author's Markdown, publication dates, image paths, and existing
reading behavior when changing the application.

## Changes and validation

Use pnpm. For setup, local preview, and publishing, read `README.md`.
The project-local launcher uses ignored `.local-tools/`; standard pnpm and
GitHub Actions work without that directory.

For rendering or asset changes, run `pnpm check`, `pnpm type-check`, and
`pnpm build`. Verify desktop and mobile navigation, article images, and a
Chinese search against the production preview. Development mode does not
exercise the real Pagefind index.

When removing a feature, update its imports, configuration exports, types,
routes, and build steps together. Files in `public/` are copied regardless
of whether their associated UI is enabled. Preserve the generated LQIP
index while it has static consumers.

## Conventions

Follow Biome's tabs and double quotes in TypeScript/JavaScript. Use
PascalCase for Astro/Svelte components and the existing config/type pairs.
Keep scroll work throttled; avoid layout reads in per-scroll callbacks.
Retain the inherited license notices in `LICENSE`.
