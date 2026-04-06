/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: 'export', // Enables static export
  basePath: '', // Change to your repo name (e.g., /my-portfolio)
  images: {
    unoptimized: true, // GitHub Pages doesn't support Next.js Image Optimization API
  },
};

export default nextConfig;
