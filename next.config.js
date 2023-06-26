/** @type {import('next').NextConfig} */
require('dotenv').config()

const nextConfig = {
  env: {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  reactStrictMode: true,
}

module.exports = nextConfig

