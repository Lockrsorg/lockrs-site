import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

/** Repository root (Turborepo workspace). */
const repoRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), "../..");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  outputFileTracingRoot: repoRoot,
};

export default nextConfig;
