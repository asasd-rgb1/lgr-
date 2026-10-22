# 样片验收 · 2026-10-22

样片：圆的影子，是一条波。仅 4 秒，静音。

| 检查 | 结果 |
| --- | --- |
| ESLint + TypeScript | `npm run lint` 通过 |
| Studio HTTP | `/SineProjection` 返回 200 |
| 实际浏览器预览 | Headless Edge 加载 Studio 与合成，浏览器脚本错误为 0 |
| 播放验证 | 按播放键后图表记录点 x 从 918 变为 1156.43；动画正常推进 |
| 中文字体 | 两个本地 Noto Sans SC 字重均 loaded；无需渲染时联网 |
| 合成枚举 | 1920×1080，30fps / 120 帧；60fps / 240 帧，均为 4 秒 |
| 30 / 60fps 时间一致性 | 2 秒处的 30fps 第 60 帧与 60fps 第 120 帧 PNG SHA-256 完全相同 |
| 真实 MP4 导出 | `renders/sine-preview-540p.mp4`，86,727 bytes |
| 媒体参数 | 960×540，4.000s，30/1 fps，120 帧，H.264，yuv420p，BT.709 色彩空间 / 原色 / 转换 |
| 音轨 | 无音轨，符合无配音、无音乐测试设计 |
| 完整解码 | FFmpeg `-xerror` 解码全部帧通过 |
| 代表帧 | 从成片抽取 0、12、30、60、90、114、119 帧并实际查看接触表 |
| 视觉结果 | 首帧有效；曲线逐渐生长、与圆周点同高；中文完整，无明显遮挡、缺字或越界；结尾保留完整曲线，没有黑色尾帧 |

2 秒关键帧 SHA-256：`76ec950e886bd6035d4ba58d3d2647877ed01497e4aac942ce095a0fb926c6b7`。

本地证据：`renders/sine-keyframe.png`、`renders/sine-keyframe-60fps.png`、`renders/qa/frame-*.png`、`renders/qa/contact-sheet.jpg`、`renders/qa/media-report.json`；均不提交 Git。

复验命令：`npm run verify:preview`。该命令检查媒体参数、完整解码并抽取代表帧；画面正确性仍须实际查看，不以抽帧成功代替视觉验收。

未执行：完整 1080P MP4、完整 60fps MP4、配音、音乐、长片制作。下一条正式影片需先完成其自身的事实核查和分镜确认。
