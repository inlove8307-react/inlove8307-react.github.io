/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: ['styles'],
  },
  output: "export",
  assetPrefix: ".",
};

export default nextConfig;
