import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output:
    process.env.DEPLOY_TARGET === "aws-static"
      ? "export"
      : undefined,
};

export default nextConfig;