/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/pre-launch",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
