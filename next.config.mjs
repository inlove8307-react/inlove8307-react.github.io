/** @type {import('next').NextConfig} */

const prefix = process.env.NODE_ENV === 'production' ? 'https://inlove8307-react.github.io/' : '';

const nextConfig = {
  sassOptions: {
    includePaths: ['styles'],
  },
  // output: "export",
  // assetPrefix: prefix,
};

export default nextConfig;
