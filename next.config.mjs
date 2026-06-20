/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
  formats: ['image/avif', 'image/webp'],
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'digifame.in',
    },
    {
      protocol: 'https',
      hostname: 'media.licdn.com',
    },
    {
      protocol: 'https',
      hostname: 'custom-images.strikinglycdn.com',
    },
    {
      protocol: 'https',
      hostname: 'p-gpb8fhd4b9fbh6fy.z01.azurefd.net',
    },
  ],
},
}

export default nextConfig
