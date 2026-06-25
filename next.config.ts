import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.useaitools.fun" }],
        destination: "https://useaitools.fun/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
