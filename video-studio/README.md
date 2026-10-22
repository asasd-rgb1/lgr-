# Remotion video

本项目为 Vibe 知识视频工作室，含 4 秒可编辑样片 `SineProjection`，并提供同样时长的 `SineProjection60`。

| 操作 | 命令 |
| --- | --- |
| 预览 | `npm run dev` |
| 代码检查 | `npm run lint` |
| 540P 关键帧 | `npm run still` |
| 540P 测试视频 | `npm run render:preview` |
| 解码与媒体验收 | `npm run verify:preview` |
| Windows 旧终端入口 | `.\scripts\run.ps1 dev` |

完整说明见 [制作流程](docs/workflow.md)、[安装记录](docs/setup-report.md) 与 [验收结果](docs/DELIVERY_QA.md)。1080P / 60fps 全片导出需先确认方向；输出在 `renders/`，不会进入 Git。以下保留官方脚手架说明。

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

Welcome to your Remotion project!

## Commands

**Install Dependencies**

```console
npm i --loglevel=error
```

**Start Preview**

```console
npm run dev
```

**Render video**

```console
npx remotion render
```

**Upgrade Remotion**

```console
npx remotion upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help on our [Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
