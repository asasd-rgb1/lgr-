import { Composition } from "remotion";
import { SineProjection } from "./scenes/SineProjection";

export const KnowledgeCompositions = () => {
  return (
    <>
      <Composition
        id="SineProjection"
        component={SineProjection}
        durationInFrames={120}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ title: "圆的影子，是一条波" }}
      />
      <Composition
        id="SineProjection60"
        component={SineProjection}
        durationInFrames={240}
        fps={60}
        width={1920}
        height={1080}
        defaultProps={{ title: "圆的影子，是一条波" }}
      />
    </>
  );
};
