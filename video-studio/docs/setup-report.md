# 安装与验证记录

日期：2026-10-22。环境：Windows 本地 Codex Desktop，无云端执行或付费 API。

## 实际路径与版本
项目根：`D:\Users\EDY\Documents\ChatGPT\vibe视频制作`。
视频工程：根目录下 `video-studio`。

| 工具 | 版本 | 路径 / 范围 |
| --- | --- | --- |
| Git | 2.53.0.windows.3 | `C:\Users\EDY\.cache\codex-runtimes\codex-primary-runtime\dependencies\native\git\cmd\git.exe` |
| Node.js | 24.19.0 | `C:\Users\EDY\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe` |
| npm / npx | 11.21.1 | `D:\Codex\.codex\tools\node-cli\node_modules\.bin\` |
| pnpm（安装 npm 时使用） | 11.25.0 | Codex bundled fallback；工程使用 npm 与 package-lock.json |
| Remotion / CLI / fonts / eslint-config | 4.0.537 | `video-studio/node_modules/`，版本统一锁定 |
| React / React DOM | 19.2.3 | 工程依赖 |
| TypeScript | 5.9.3 | 工程开发依赖 |
| FFmpeg / FFprobe | n7.1 | `video-studio/node_modules/@remotion/compositor-win32-x64-msvc/` |
| 渲染浏览器 | Microsoft Edge 155.0.4283.62 | `C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe` |

Node 与 npm 目录已追加到用户 PATH，未覆盖既有条目。已打开的终端可使用 `video-studio/scripts/run.ps1` 刷新用户 PATH，无须为运行工程重启 Codex。

FFmpeg 为 Remotion 自带的精简构建，不单独安装重复副本；可用 `npm run ffmpeg -- -version` 与 `npm run ffprobe -- -version` 调用。它足够导出、抽帧和检查本项目；额外滤镜应先核对是否包含。

## Skills

### Vibe 知识短片导演
- 源码：[AlbertPine/vibe-knowledge-video-director](https://github.com/AlbertPine/vibe-knowledge-video-director)。
- 固定 commit：`5593bd874dbfd4cf13ed1c346f1933194d780add`。
- 用户级安装位置：`D:\Codex\.codex\skills\vibe-knowledge-video-director\`。
- 使用本机 `$skill-installer` 的 `install-skill-from-github.py` 安装仓库根目录，完整保留 7 个文件：README、SKILL、agents/openai.yaml 与 4 个 references 文档。
- 安装前已审阅 README、SKILL 和参考文档；源码树没有可执行脚本、包依赖、上传操作或付费 API 要求。
- 实测 Codex app-server `skills/list` + `forceReload:true`：名称正确，`enabled:true`，`scope:user`，解析错误为空。当前任务已按导演 Skill 完成事实账本、分镜、连续动效与媒体验收。

### Remotion 官方 Skills
- 本机原已安装插件 `remotion@openai-curated-remote`，版本 `4.0.534`。
- 实测 `codex plugin list --json`：`installed:true`、`enabled:true`；本次会话技能目录中也已提供以下能力，已按需读取并使用：
  - `remotion-best-practices`
  - `remotion-create`
  - `remotion-markup`
  - `remotion-render`
- 路径：`D:\Codex\.codex\plugins\cache\openai-curated-remote\remotion\4.0.534\skills\`，每项技能位于同名子目录的 `SKILL.md`。
- 官方[推荐独立安装命令](https://www.remotion.dev/docs/ai/skills)为 `npx skills add remotion-dev/skills`。当前插件已经包含上述内容，按用户要求复用，不重复执行安装。
- 插件由 Codex 管理版本与整组技能；独立 Skills 是可单独放入用户或仓库目录的说明与资源。两者均指导工作，并不代替安装 Remotion npm 工程依赖。插件说明版本与工程库版本独立记录。

### 下次调用
在本项目的新消息中写：

```text
使用 $vibe-knowledge-video-director，为“你的主题”先核查事实并写脚本和分镜，只做 5 秒样片。
使用 remotion:remotion-create 和 remotion:remotion-markup，在 video-studio 实现上述分镜，先预览。
使用 remotion:remotion-render，导出已确认样片的 540P 测试 MP4 并核对代表帧。
```

也可在 Skill 选择器中选择对应名称。新装的导演 Skill 从下一轮可用；本机已经实测识别。依据 [OpenAI 官方说明](https://learn.chatgpt.com/docs/build-skills)，通常自动检测变更，只有选择器仍不显示时才需要重启 Codex。

## 安装与故障处理
- 保留已有空 `.git`；通过官方 create-video blank 模板在独立 `video-studio/` 搭建，没有新建 GitHub 仓库。
- 本机 npm 官方 registry 元数据连接超时，本次仅对安装命令使用 `https://registry.npmmirror.com`；没有改写全局 npm registry。锁文件记录实际下载地址和 integrity。
- 首次 Chrome Headless Shell 下载缓慢，停止下载并复用本机 Edge。配置允许 `REMOTION_BROWSER_EXECUTABLE` 覆盖；其他平台保留 Remotion 默认浏览器选择。
- Studio 使用 3000 端口；渲染脚本使用 3101，避开本机 Studio 启动页复用导致的 composition 检测失败。若占用端口，按实际情况指定新的空闲端口。
- 已完成验证见 `DELIVERY_QA.md`；本次仅导出一个 4 秒 540P MP4，未制作 60 秒视频，也未执行完整高清渲染。

## Git 状态与推送边界
- 本地工作分支：`codex/video-studio-setup`。
- origin：`https://github.com/asasd-rgb1/lgr-.git`。
- 仅本仓库 `.git/config` 设置作者：`asasd-rgb1 <342925286+asasd-rgb1@users.noreply.github.com>`；采用用户明确提供的 GitHub noreply 邮箱，全局 Git 作者未修改。
- 已将尚未推送的初始提交作者与提交者修正为该 noreply 邮箱，并移除已跟踪文档中的旧邮箱记录；未改动视频源码或重新执行视频测试。
- 用户明确要求暂不推送；只创建本地提交。
- 本次只读 `git ls-remote origin` 遇到连接重置，尚未确认远程历史或写入权限。后续获得推送授权后，先 fetch 并核对历史；如远程非空则安全整合或使用新分支，禁止强推。
- `.gitignore` 排除 node_modules、缓存、密钥文件与所有 renders 输出（保留目录 README）；提交前另行审阅暂存区。
