/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // 确保Next.js只在当前目录中查找文件
  distDir: '.next',
  // 禁用遍历父目录
  experimental: {
    disableOptimizedLoading: true
  },
  // 添加图片域名配置
  images: {
    domains: ['via.placeholder.com']
  }
};

module.exports = nextConfig; 