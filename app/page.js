import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>Relay</h1>
      <p>Relay routes on-call alerts to the right person, the first time.</p>
      <p>
        <Link href="/blog/">Read the blog</Link>
      </p>
    </>
  )
}
