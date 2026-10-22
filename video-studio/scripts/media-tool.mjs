import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const require = createRequire(import.meta.url);
const [tool, ...args] = process.argv.slice(2);
if (!["ffmpeg", "ffprobe"].includes(tool))
  throw new Error("Use ffmpeg or ffprobe");
const suffix =
  process.platform === "win32"
    ? "-msvc"
    : process.platform === "linux"
      ? "-gnu"
      : "";
const packageName = `@remotion/compositor-${process.platform}-${process.arch}${suffix}`;
const executable = join(
  dirname(require.resolve(packageName)),
  `${tool}${process.platform === "win32" ? ".exe" : ""}`,
);
if (!existsSync(executable))
  throw new Error(`Missing ${executable}; run npm ci on this machine.`);
const result = spawnSync(executable, args, {
  stdio: "inherit",
  windowsHide: true,
});
if (result.error) throw result.error;
process.exitCode = result.status ?? 1;
