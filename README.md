# Relay Blog (Next.js)

Next.js App Router site exported statically (`output: 'export'`) and deployed to GitHub Pages.

- Posts: `content/blog/<slug>.md` with frontmatter (`title`, `date`, `summary`, `image`), read with gray-matter in `lib/posts.js`
- Static files: `public/` (post images in `public/images/`)
- Live site: https://darioghtest.github.io/paragraph-next-test/blog/

```sh
npm install
npm run dev
```
