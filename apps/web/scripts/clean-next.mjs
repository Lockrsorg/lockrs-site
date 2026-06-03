import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appDir = path.dirname(fileURLToPath(import.meta.url));
const nextDir = path.join(appDir, "..", ".next");
const turboDir = path.join(appDir, "..", "..", "..", ".turbo");

for (const dir of [nextDir, turboDir]) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
    console.log(`Removed ${dir}`);
  }
}
