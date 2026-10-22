# Vibe 知识视频工作室

使用 Codex、导演 Skill 与 Remotion 制作可编辑的中文知识动画。工程位于 [`video-studio/`](video-studio/)，规则见 [`AGENTS.md`](AGENTS.md)，续接任务先读 [`PROJECT_PROGRESS.md`](PROJECT_PROGRESS.md)。

当前包含 4 秒「圆的影子，是一条波」技术样片：连续圆周运动、投影连线和实时生长的正弦曲线；支持 1080P 30fps / 60fps，默认低成本预览。

```powershell
cd video-studio
npm ci
npm run dev
# 若当前终端尚未刷新安装后的用户 PATH：
.\scripts\run.ps1 dev
```

浏览终端打印的 Studio 地址。安装、目录、验证和 Skill 调用见 [`video-studio/docs/setup-report.md`](video-studio/docs/setup-report.md)。不需要 API 密钥；测试视频和缓存只保留在本地。

已关联目标：[`asasd-rgb1/lgr-`](https://github.com/asasd-rgb1/lgr-)。推送需另行明确授权。
