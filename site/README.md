# senthilmuthiah.com

Personal website and blog. Built with Astro, hosted free on Cloudflare Pages, with an online editor (Decap CMS) at `/admin`.

## Change your details

Edit `src/site.config.js`: email, links, years in healthcare IT, and your photo.

- Put your photo in `public/images/` (e.g. `senthil.jpg`), then set `photo: '/images/senthil.jpg'`.

## Run on your PC

Requires Node.js 22 or newer.

```bash
npm install
npm run dev        # site at http://localhost:4321
```

## Write a post

**Online:** open `https://senthilmuthiah.com/admin/`, log in with GitHub, click *New Blog post*. Untick *Draft* and publish. The site updates in about a minute.

**Offline (Typora / Obsidian / IntelliJ):** add a `.md` file to `src/content/blog/`:

```markdown
---
title: "Post title"
date: 2026-10-10
summary: "One-line summary."
tags: [EMR, Java]
draft: false
---

Post content here.
```

Commit and push — Cloudflare publishes it automatically.

**Offline with the visual editor:** run `npm run cms` in one terminal and `npm run dev` in another, then open `http://localhost:4321/admin/`. Changes are saved straight to your local files.

## First-time setup

### 1. GitHub
1. Create a repository, e.g. `senthilmuthiah-site`.
2. Push this folder to it.
3. In `public/admin/config.yml`, already set to `senthilmuthiah1/senthilmuthiah-site` (change it if you use a different repo name).

### 2. Cloudflare Pages
1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → choose the repository.
2. Framework preset: **Astro**. Build command: `npm run build`. Output directory: `dist`.
3. Settings → Environment variables → add `NODE_VERSION` = `22`.
4. Deploy and test on the `*.pages.dev` address.

### 3. GitHub login for the online editor
1. GitHub → Settings → Developer settings → OAuth Apps → New OAuth App.
   - Homepage URL: `https://senthilmuthiah.com`
   - Authorization callback URL: `https://senthilmuthiah.com/api/callback`
2. Copy the Client ID and generate a Client Secret.
3. Cloudflare Pages → project → Settings → Variables and secrets → add:
   - `GITHUB_CLIENT_ID`
   - `GITHUB_CLIENT_SECRET` (as a secret)
4. Redeploy.

> Before the domain is connected, test the editor on your `*.pages.dev` address: temporarily set `base_url` in `public/admin/config.yml` and the OAuth callback URL to that address.

### 4. Domain
1. Add `senthilmuthiah.com` to Cloudflare and copy **all** existing DNS records (especially email: MX, SPF, DKIM, DMARC).
2. Point the domain's nameservers to Cloudflare.
3. Pages project → Custom domains → add `senthilmuthiah.com` and `www.senthilmuthiah.com`.

### 5. Shut down AWS
Only after the new site is live on the domain. See the plan document for the full checklist.

## Folder guide

| Path | What it is |
|---|---|
| `src/site.config.js` | Your name, links, photo, years |
| `src/pages/index.astro` | Homepage |
| `src/pages/blog/` | Blog list and post pages |
| `src/content/blog/` | Your posts (Markdown) |
| `src/styles/global.css` | Colours, fonts, layout |
| `public/admin/` | Online editor (Decap CMS) |
| `public/images/` | Photo and post images |
| `functions/api/` | GitHub login helper for the editor |
