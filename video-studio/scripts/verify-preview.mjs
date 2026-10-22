import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, statSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const video = "renders/sine-preview-540p.mp4";
const output = join(root, "renders/qa");
mkdirSync(output, { recursive: true });
const run = (tool, args) => {
  const result = spawnSync(
    process.execPath,
    ["scripts/media-tool.mjs", tool, ...args],
    {
      cwd: root,
      encoding: "utf8",
      windowsHide: true,
      maxBuffer: 4 * 1024 * 1024,
    },
  );
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(result.stderr || `${tool} failed`);
  return result.stdout;
};
const metadata = JSON.parse(
  run("ffprobe", [
    "-v",
    "error",
    "-count_frames",
    "-show_streams",
    "-show_format",
    "-of",
    "json",
    video,
  ]),
);
const stream = metadata.streams.find((s) => s.codec_type === "video");
assert.ok(stream, "Video stream missing");
assert.equal(stream.codec_name, "h264");
assert.equal(stream.width, 960);
assert.equal(stream.height, 540);
assert.equal(stream.r_frame_rate, "30/1");
assert.equal(stream.nb_read_frames, "120");
assert.equal(stream.pix_fmt, "yuv420p");
assert.equal(stream.color_space, "bt709");
assert.equal(stream.color_transfer, "bt709");
assert.equal(stream.color_primaries, "bt709");
assert.ok(Math.abs(Number(metadata.format.duration) - 4) < 0.01);
assert.equal(
  metadata.streams.filter((s) => s.codec_type === "audio").length,
  0,
);
// Remotion's lean FFmpeg omits wrapped_avframe; rawvideo still forces full decoding.
run("ffmpeg", [
  "-v",
  "error",
  "-xerror",
  "-i",
  video,
  "-c:v",
  "rawvideo",
  "-f",
  "null",
  "-",
]);
const sampledFrames = [0, 12, 30, 60, 90, 114, 119];
for (const frame of sampledFrames) {
  const image = join(output, `frame-${String(frame).padStart(3, "0")}.png`);
  run("ffmpeg", [
    "-v",
    "error",
    "-y",
    "-ss",
    String(frame / 30),
    "-i",
    video,
    "-frames:v",
    "1",
    image,
  ]);
  assert.ok(statSync(image).size > 1000, `Empty frame ${frame}`);
}
const report = {
  checkedAt: new Date().toISOString(),
  file: video,
  metadata,
  fullDecode: "passed",
  sampledFrames,
  visualInspection:
    "Review the exported PNG frames; extraction alone is not visual QA.",
};
writeFileSync(
  join(output, "media-report.json"),
  JSON.stringify(report, null, 2),
);
console.log(
  "PASS: 4s / 120 frames / 960x540 / 30fps / H.264 / yuv420p / BT.709 / no audio; full decode passed; 7 frames extracted to renders/qa.",
);
