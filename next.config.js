/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['mysql2', 'sqlite3', 'pg'],
  turbopack: {
    root: '/Users/vincentla/Desktop/unc/fastxgdg'
  }
};

module.exports = nextConfig;