import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: "Relay Blog",
  description: "Product news and engineering notes from the Relay team.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Relay</Link>
            <Link href="/blog/">Blog</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2026 Relay</p>
        </footer>
      </body>
    </html>
  )
}
