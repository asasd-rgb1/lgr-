import { loadFont } from "@remotion/fonts";
import { staticFile } from "remotion";

// loadFont delays rendering until the local fonts have loaded.
void loadFont({
  family: "Vibe Noto Sans SC",
  url: staticFile("assets/fonts/noto-sans-sc-400-sample.ttf"),
  weight: "400",
});
void loadFont({
  family: "Vibe Noto Sans SC",
  url: staticFile("assets/fonts/noto-sans-sc-700-sample.ttf"),
  weight: "700",
});
