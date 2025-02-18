const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
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
