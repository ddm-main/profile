/* Copy the Vite build to the repo root so GitHub Pages (branch root) serves it. */
import { cp, rm, rename, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

try {
  await access(dist);
} catch {
  console.error("No dist/ found — run `vite build` first.");
  process.exit(1);
}

await rm(join(root, "assets"), { recursive: true, force: true });
await cp(join(dist, "assets"), join(root, "assets"), { recursive: true });
await rm(join(root, "index.html"), { force: true });
await rename(join(dist, "dev.html"), join(root, "index.html"));

console.log("Published build to repo root: index.html + assets/");
