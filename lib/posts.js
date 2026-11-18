import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"
import { marked } from "marked"

const POSTS_DIR = path.join(process.cwd(), "content", "blog")

// Must match `basePath` in next.config.mjs. Used for files in `public/`.
export const BASE_PATH = "/paragraph-next-test"

function readPost(fileName) {
  const slug = fileName.replace(/\.mdx?$/, "")
  const raw = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8")
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title,
    date: new Date(data.date).toISOString(),
    summary: data.summary ?? "",
    image: data.image ?? null,
    content,
  }
}

export function getAllPosts() {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => /\.mdx?$/.test(f))
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug) {
  const post = getAllPosts().find((p) => p.slug === slug)
  if (!post) return null
  return { ...post, html: marked.parse(post.content) }
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })
}
