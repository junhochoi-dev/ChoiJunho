/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
};
module.exports = nextConfig;

const withImages = require("next-images");
module.exports = withImages();
