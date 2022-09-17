/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  redirects: () => {
    return [{ source: "/canceled", destination: "/", permanent: true }];
  },
};

module.exports = nextConfig;
