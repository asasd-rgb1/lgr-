import { palette, fontFamily } from "../../theme";
import { orbitSample, sinePath } from "../../utils/motion";
import { TraceDot } from "../animation/TraceDot";

export const ProjectionDiagram = ({ progress }: { progress: number }) => {
  const centerX = 450;
  const centerY = 630;
  const radius = 190;
  const chartLeft = 920;
  const chartWidth = 760;
  const sample = orbitSample(progress * 2 * Math.PI, radius);
  const sourceX = centerX + sample.x;
  const screenY = centerY - sample.y;
  const traceX = chartLeft + chartWidth * progress;

  return (
    <svg
      width={1920}
      height={1080}
      viewBox="0 0 1920 1080"
      style={{ position: "absolute", fontFamily }}
      role="img"
      aria-label="匀速圆周运动的竖直投影逐渐绘制出一周期正弦曲线"
    >
      <defs>
        <linearGradient id="waveInk" x1="0" x2="1">
          <stop offset="0%" stopColor={palette.mint} stopOpacity={0.35} />
          <stop offset="100%" stopColor={palette.mint} />
        </linearGradient>
      </defs>
      {[-1, 0, 1].map((level) => (
        <line
          key={level}
          x1={chartLeft}
          x2={chartLeft + chartWidth}
          y1={centerY - level * radius}
          y2={centerY - level * radius}
          stroke={palette.grid}
          strokeWidth={level === 0 ? 2 : 1}
          strokeDasharray={level === 0 ? undefined : "5 10"}
        />
      ))}
      {[0, 0.25, 0.5, 0.75, 1].map((fraction) => (
        <line
          key={fraction}
          x1={chartLeft + fraction * chartWidth}
          x2={chartLeft + fraction * chartWidth}
          y1={centerY - radius - 20}
          y2={centerY + radius + 20}
          stroke={palette.grid}
          strokeWidth={fraction === 0 ? 2 : 1}
        />
      ))}
      <circle
        cx={centerX}
        cy={centerY}
        r={radius}
        fill="none"
        stroke={palette.grid}
        strokeWidth={2}
      />
      <line
        x1={centerX - radius - 30}
        x2={centerX + radius + 30}
        y1={centerY}
        y2={centerY}
        stroke={palette.grid}
      />
      <line
        x1={centerX}
        x2={centerX}
        y1={centerY - radius - 30}
        y2={centerY + radius + 30}
        stroke={palette.grid}
      />
      <line
        x1={centerX}
        y1={centerY}
        x2={sourceX}
        y2={screenY}
        stroke={palette.gold}
        strokeWidth={4}
      />
      <circle cx={centerX} cy={centerY} r={5} fill={palette.gold} />
      <line
        x1={sourceX}
        y1={screenY}
        x2={traceX}
        y2={screenY}
        stroke={palette.mint}
        strokeWidth={2}
        strokeDasharray="7 9"
        opacity={0.5}
      />
      <line
        x1={traceX}
        x2={traceX}
        y1={centerY}
        y2={screenY}
        stroke={palette.mint}
        opacity={0.22}
        strokeWidth={2}
      />
      <path
        d={sinePath(progress, chartLeft, centerY, chartWidth, radius)}
        fill="none"
        stroke="url(#waveInk)"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <TraceDot x={sourceX} y={screenY} />
      <TraceDot x={traceX} y={screenY} />
      <g fill={palette.muted} fontSize={30}>
        <text x={chartLeft - 25} y={centerY - radius + 10} textAnchor="end">
          +A
        </text>
        <text x={chartLeft - 25} y={centerY + radius + 10} textAnchor="end">
          −A
        </text>
        <text x={chartLeft} y={centerY + radius + 65} textAnchor="middle">
          0
        </text>
        <text
          x={chartLeft + chartWidth / 2}
          y={centerY + radius + 65}
          textAnchor="middle"
        >
          T/2
        </text>
        <text
          x={chartLeft + chartWidth}
          y={centerY + radius + 65}
          textAnchor="middle"
        >
          T
        </text>
      </g>
      <g fill={palette.ink} fontSize={38}>
        <text x={centerX} y={940} textAnchor="middle">
          匀速圆周运动
        </text>
        <text x={chartLeft + chartWidth / 2} y={940} textAnchor="middle">
          竖直位置随时间变化
        </text>
      </g>
    </svg>
  );
};
