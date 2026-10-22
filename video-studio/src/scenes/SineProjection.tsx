import {
  AbsoluteFill,
  Interactive,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ProjectionDiagram } from "../components/charts/ProjectionDiagram";
import { SceneTitle } from "../components/text/SceneTitle";
import { palette, fontFamily } from "../theme";
import { progressBetween } from "../utils/motion";

export type SineProjectionProps = { title: string };

export const SineProjection = ({ title }: SineProjectionProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progress = progressBetween(frame / fps, 0.3, 3.7);

  return (
    <AbsoluteFill
      style={{ background: palette.background, color: palette.ink, fontFamily }}
    >
      <AbsoluteFill
        style={{
          background:
            "radial-gradient(ellipse at 62% 62%, #142639 0%, transparent 64%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 150,
          top: 90,
          width: 66,
          height: 5,
          background: palette.mint,
        }}
      />
      <SceneTitle title={title} />
      <Interactive.Div
        name="投影说明"
        premountFor={fps}
        style={{
          position: "absolute",
          left: 154,
          top: 290,
          fontSize: 42,
          color: palette.muted,
          opacity: interpolate(frame, [0, 0.5 * fps], [0.55, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: interpolate(
            frame,
            [0, 0.5 * fps],
            ["0px 12px", "0px 0px"],
            { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
          ),
        }}
      >
        匀速转动，记录竖直位置
      </Interactive.Div>
      <Interactive.Div
        name="正弦公式"
        premountFor={fps}
        style={{
          position: "absolute",
          right: 230,
          top: 287,
          fontSize: 48,
          color: palette.mint,
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontStyle: "italic",
        }}
      >
        y = A sin(ωt)
      </Interactive.Div>
      <ProjectionDiagram progress={progress} />
    </AbsoluteFill>
  );
};
