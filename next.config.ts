import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      loaders: {}, // Вкажи конфігурації, якщо хочеш ввімкнути Turbopack
    },
    // Або видали `turbo` для вимкнення Turbopack
  },
};

export default nextConfig;