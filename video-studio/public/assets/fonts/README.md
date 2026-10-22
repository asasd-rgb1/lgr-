# 本地中文字体

- 字体：Noto Sans SC，Google Fonts 提供，400 / 700 字重。
- 来源：https://fonts.google.com/noto/specimen/Noto+Sans+SC
- 许可证：SIL Open Font License 1.1，全文在 `OFL.txt`。
- 2026-10-22 通过 Google Fonts CSS API 的 `text=` 参数取得官方子集，保留样片所需汉字与坐标标签；两份文件合计约 19KB。
- 画面使用 `@remotion/fonts` 加载本地文件，渲染时无需访问字体服务。
- 新文案如包含子集外的字，会使用系统中文字体；正式制作新片时须补齐所需字形或换用已授权的完整本地字体，并重新检查代表帧。
