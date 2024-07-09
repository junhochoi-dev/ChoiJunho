/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export",
    basePath: "/ChoiJunHo",
};
module.exports = nextConfig;

const withImages = require("next-images");
module.exports = withImages();
