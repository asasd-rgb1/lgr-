# 制作流程与工程地图

1. 阅读根目录 `PROJECT_PROGRESS.md`，只加载本次相关 Skill。
2. 用导演 Skill 明确题目、受众与事实边界，在 `docs/research/` 记录来源和断言。
3. 在 `docs/storyboard/` 完成脚本与连续分镜，先选 3–5 秒验证方向。
4. 在 `src/scenes/` 实现场景，在 `src/Composition.tsx` 注册；复用 `components/animation/`、`components/text/`、`components/charts/` 和 `utils/motion.ts`。
5. `npm run dev` 预览，`npm run lint` 检查，再用 `npm run still` 检查关键帧；需要动态文件时运行 `npm run render:preview`。
6. 用户确认方向后，才运行完整版本的 `render:final` 或 `render:60fps`。样片预设仍仅 4 秒，不会自动扩展长片。
7. 使用 `npm run ffprobe -- <参数>` 核实媒体，用 `npm run ffmpeg -- <参数>` 抽帧；记录在 `docs/DELIVERY_QA.md`，更新进度后提交源码。

## 目录
| 位置 | 用途 |
| --- | --- |
| `src/Composition.tsx` | 30fps / 60fps 独立合成注册与可编辑默认标题 |
| `src/scenes/` | 持续运动的场景 |
| `src/components/` | 动画标记、标题、图表组件 |
| `src/utils/` | 按秒换算、圆周采样、曲线工具 |
| `public/assets/` | 图片、音频、视频与本地字体 |
| `docs/research/` / `docs/storyboard/` | 来源、事实边界、脚本与分镜 |
| `renders/` | 仅本地输出；Git 只跟踪目录说明 |
| `scripts/` | Windows 入口与跨平台媒体工具包装 |

## 时序与可复现性
动画只依赖 `useCurrentFrame()` 和 `useVideoConfig().fps`。相同秒数在 30 / 60fps 下有相同数学状态。不要使用 CSS 动画、系统时钟或不固定种子的随机数。首次 Chromium 下载完成后复用缓存。

## 克隆到另一台机器
安装兼容的 Node.js 与 npm，执行 `npm ci`，然后打开 Studio。用户级 Skills 不进入本仓库，按 setup-report 记录安装；不要直接复制 `node_modules` 或 Chromium 缓存跨平台使用。
