import { palette } from "../../theme";

/** SVG marker: shared by the rotating source and its recorded projection. */
export const TraceDot = ({ x, y }: { x: number; y: number }) => (
  <g>
    <circle cx={x} cy={y} r={24} fill={palette.mint} opacity={0.08} />
    <circle cx={x} cy={y} r={14} fill={palette.mint} opacity={0.18} />
    <circle cx={x} cy={y} r={8} fill={palette.mint} />
    <circle cx={x - 2} cy={y - 2} r={2} fill="white" />
  </g>
);
