---
title: "渲染流程 —— 构建 DOM 树"
tag: ["DOM 树", "渲染流程"]
---

回顾一下整个渲染流程：

1. 构建 DOM 树 —— DOM
2. 样式计算 —— Style
3. 布局阶段 —— Layout
4. 分层 —— Layer
5. 绘制 —— Paint
6. 光栅化 —— tiles（分块），raster（光栅化）
7. 合成 —— draw quad（绘制图块的命令）
8. 展会 —— display

这篇文章的内容着重于 DOM 树的构建。

由于渲染引擎是无法直接理解 HTML 的，因此要将其转化为渲染引擎能够理解的结构 —— DOM。DOM 提供了对 HTML 文档结构化的表述
