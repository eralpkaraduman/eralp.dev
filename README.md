# eralp.dev

Personal website and blog built with [Hugo](https://gohugo.io).

## Setup

```bash
brew install hugo
```

## Development

```bash
hugo server
```

Open http://localhost:1313

## New post

```bash
hugo new content content/posts/my-post.md
```

Edit the generated file, set `title` and `date` in the frontmatter, then write your content in Markdown.

## Build

```bash
hugo --minify
```

Output goes to `public/`.

## Deploy

Hosted on Cloudflare Pages. Pushes to `hugo` branch trigger automatic builds.

Build command: `hugo --minify`
Build output directory: `public`
Environment variable: `HUGO_VERSION` = `0.157.0`
