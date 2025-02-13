const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  module.exports = withBundleAnalyzer({
    // your existing Next.js config, e.g.:
    reactStrictMode: true,
  });
  