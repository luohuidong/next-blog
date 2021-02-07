---
title: "JavaScript 是如何影响 DOM 生成的"
category: "浏览器工作原理"
tag: ["DOM"]
---

当浏览器在解析 HTML 文件的时候，如果遇到 `<script>`，那么此时 HTML 解析器就会暂停 DOM 解析，因为接下来的 JavaScript 可能要修改当前已经生成的 DOM 结构。当 HTML 解析器暂停工作后
