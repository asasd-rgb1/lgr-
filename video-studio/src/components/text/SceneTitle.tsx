import { Interactive, useVideoConfig } from "remotion";
import { palette } from "../../theme";

export const SceneTitle = ({ title }: { title: string }) => {
  const { fps } = useVideoConfig();
  return (
    <Interactive.Div
      name="中文标题"
      premountFor={fps}
      style={{
        position: "absolute",
        left: 150,
        top: 119,
        color: palette.ink,
        fontSize: 100,
        lineHeight: 1.3,
        fontWeight: 700,
        letterSpacing: -3,
        whiteSpace: "nowrap",
      }}
    >
      {title}
    </Interactive.Div>
  );
};
