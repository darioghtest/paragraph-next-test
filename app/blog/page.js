import Link from "next/link"
import { formatDate, getAllPosts } from "../../lib/posts"

export const metadata = {
  title: "Blog | Relay",
}

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
            <br />
            <small>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </small>
            <p>{post.summary}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
