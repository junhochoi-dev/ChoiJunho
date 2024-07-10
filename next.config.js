/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
};
export default nextConfig;

const withImages = require("next-images");
module.exports = withImages();
