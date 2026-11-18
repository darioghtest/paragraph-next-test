/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/paragraph-next-test",
  trailingSlash: true,
  images: { unoptimized: true },
}

export default nextConfig
