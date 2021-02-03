---
title: "制作一个 Node CLI 工具"
category: "Node"
tag: ["CLI"]
---

## CLI 介绍

以下为 Wikipedia 对 CLI 的描述：

> A command-line interface (CLI) processes commands to a computer program in the form of lines of text. The program which handles the interface is called a command-line interpreter or command-line processor. Operating systems implement a command-line interface in a shell for interactive access to operating system functions or services.

## 使用场景

对于我们前端来说，最常用的 CLI 工具应该就是 NPM CLI 了。另外我们在创建 React 项目、Vue 项目都会用到他们官方的脚手架。

另外我们在制作打包工具、或者制作项目模板的时候，也会通过 CLI 工具来完成。

## CLI 工具制作

现在假设我们的项目已经形成了一套项目模板，并且在未来会经常用到，那么我们就来看一下如何利用 CLI 工具，快速将该模板应用到后续的新项目中。

下面为制作 CLI 工具会使用到的 NPM package：

- [chalk](https://github.com/chalk/chalk)：chalk 用于给终端中的文字添加样式。
- [clear](https://github.com/bahamas10/node-clear)：清除终端内容。
- [commander](https://github.com/tj/commander.js)：用于定义命令行接口参数。
- [download-git-repo](https://www.npmjs.com/package/download-git-repo)：用于下载 git 仓库代码到本地。
- [figlet](https://www.npmjs.com/package/figlet)：可以在命令行中输出文字图形。
- [open](https://github.com/sindresorhus/open)：这是一个跨平台的可用于打开 url、图片、可执行文件的工具。
- [ora](https://github.com/sindresorhus/ora)：可以在终端中展示转圈圈的小菊花。

## 参考资料

- [Build a JavaScript Command Line Interface (CLI) with Node.js](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)
- [How To Build A Command-Line Tool With NodeJS - A step-by-step guide](https://dev.to/dendekky/how-to-build-a-command-line-tool-with-nodejs-a-step-by-step-guide-386k)
