/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/**', // Matches all paths on raw.githubusercontent.com
          },
        ],
      },
};

export default nextConfig;
