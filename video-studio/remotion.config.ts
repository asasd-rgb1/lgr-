/**
 * Note: When using the Node.JS APIs, the config file
 * doesn't apply. Instead, pass options directly to the APIs.
 *
 * All configuration options: https://remotion.dev/docs/config
 */

import { Config } from "@remotion/cli/config";
import { existsSync } from "node:fs";

// Reuse a local browser on Windows; other systems keep Remotion's default.
// An explicit path also supports controlled rendering environments.
const browserOverride = process.env.REMOTION_BROWSER_EXECUTABLE;
const localEdge =
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
if (browserOverride) {
  Config.setBrowserExecutable(browserOverride);
} else if (process.platform === "win32" && existsSync(localEdge)) {
  Config.setBrowserExecutable(localEdge);
}

Config.setRspack(true);
Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setDefaultPremountInSeconds(2);
