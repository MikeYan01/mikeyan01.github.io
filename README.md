# MikeYan01's Blog

Personal blog at <https://mikeyan01.github.io/>, built with Astro and Svelte
and adapted from the Firefly theme.

## Local development

Requires Node.js >= 22.23.0 and pnpm 11.22.0.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

For a production preview with real Pagefind search:

```sh
pnpm build
pnpm preview --host 127.0.0.1 --port 4321
```

This checkout also has a local pnpm launcher:

```sh
bash scripts/local-preview.sh build
bash scripts/local-preview.sh
```

Open <http://localhost:4321/>. Production preview serves `dist/`; after editing,
build again and refresh. Development mode reloads automatically but does not
use the production search index.

The local launcher requires the ignored `.local-tools/` directory. Standard
pnpm commands and GitHub Actions do not. `.npmrc` selects the Huawei Cloud npm
mirror for this project.

## Content and configuration

- Articles: `src/content/posts/`
- Article images: `public/blog-assets/images/`
- About page: `src/content/spec/about.md`
- Site title, URL and reading options: `src/config/siteConfig.ts`
- Profile and GitHub link: `src/config/profileConfig.ts`
- Navigation: `src/config/navBarConfig.ts`
- Sidebar: `src/config/sidebarConfig.ts`
- Appearance controls: `src/config/displaySettingsConfig.ts`

Create a post with `pnpm new-post <filename>`. Text uses system fonts.
Article images are local; YouTube embeds require an internet connection.

## Checks

```sh
pnpm check
pnpm type-check
pnpm build
```

## GitHub Pages

In **Settings → Pages → Build and deployment**, select **GitHub Actions**.
The deployment workflow builds `dist/` on pushes to `master` or manual runs.
Canonical URLs, feeds and the sitemap use `https://mikeyan01.github.io/`.

Article URLs use `/posts/<slug>/`. Redirects from the former Jekyll URLs have
not been configured.

The inherited theme's license notices are preserved in `LICENSE`.
