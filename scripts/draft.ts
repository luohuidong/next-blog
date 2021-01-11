import path from "path";

import getFormattedDate from "./utils/getFormattedDate";
import writeMarkdownFile from "./utils/writeMarkdownFile";
import checkFileExist from "./utils/checkFileExist";

function newDraft() {
  const title = process.argv[2];
  if (!title) {
    console.error("[error] 请输入文章标题");
    return;
  }

  const filePath = path.resolve(__dirname, "..", "draft", `${title}.md`);

  if (checkFileExist(filePath)) {
    console.error("[error] 文章已存在");
    return;
  }

  const content = `---
title: "${title}"
date: "${new Date().valueOf()}"
tag: [""]
---
  `;

  writeMarkdownFile(filePath, content);
}

newDraft();
