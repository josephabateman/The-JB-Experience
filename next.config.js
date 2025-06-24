const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  experimental: {
    optimizeCss: true,
  },

  async headers() {
    return [
      {
        source: "/video/:path*",
        headers: [
          { key: "Content-Type", value: "application/vnd.apple.mpegurl" }, // HLS playlist
          { key: "Access-Control-Allow-Origin", value: "*" }, // Fix CORS issues
        ],
      },
      {
        source: "/video/:path*.ts",
        headers: [
          { key: "Content-Type", value: "video/mp2t" }, // HLS segments
          { key: "Access-Control-Allow-Origin", value: "*" },
        ],
      },
    ];
  },

  webpack: (config) => {
    // Support for YAML files
    config.module.rules.push({
      test: /\.ya?ml$/,
      type: "asset/resource",
    });

    // Support for Markdown files
    config.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
