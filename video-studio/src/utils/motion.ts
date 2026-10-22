export const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

/** All timing is in seconds, so the same scene works at 30 and 60 fps. */
export const progressBetween = (seconds: number, start: number, end: number) =>
  clamp01((seconds - start) / (end - start));

/** Mathematical y points upward; invert y only when drawing to the screen. */
export const orbitSample = (phase: number, amplitude: number) => ({
  x: amplitude * Math.cos(phase),
  y: amplitude * Math.sin(phase),
});

export const sinePath = (
  progress: number,
  left: number,
  centerY: number,
  width: number,
  amplitude: number,
) => {
  const end = clamp01(progress);
  const steps = Math.max(1, Math.ceil(end * 240));
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = (i / steps) * end;
    return `${i === 0 ? "M" : "L"} ${(left + width * t).toFixed(2)} ${(centerY - amplitude * Math.sin(2 * Math.PI * t)).toFixed(2)}`;
  }).join(" ");
};
