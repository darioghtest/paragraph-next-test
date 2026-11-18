import Link from "next/link"
import { notFound } from "next/navigation"
import { BASE_PATH, formatDate, getAllPosts, getPost } from "../../../lib/posts"

export const dynamicParams = false

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  return post
    ? { title: `${post.title} | Relay`, description: post.summary }
    : {}
}

export default async function BlogPost({ params }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <article>
      {post.image && (
        <img
          src={`${BASE_PATH}${post.image}`}
          alt=""
          width={720}
          height={360}
        />
      )}
      <h1>{post.title}</h1>
      <p>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <p>
        <Link href="/blog/">&larr; All posts</Link>
      </p>
    </article>
  )
}
