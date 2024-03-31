/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.githubassets.com','xumm.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nftstorage.link',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
