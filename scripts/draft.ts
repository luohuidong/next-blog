import path from "path";
import fs from "fs";

import writeMarkdownFile from "./utils/writeMarkdownFile";
import checkFileExist from "./utils/checkFileExist";

function newDraft() {
  const title = process.argv[2];
  if (!title) {
    console.error("[error] 请输入文章标题");
    return;
  }

  const draftDirPath = path.resolve(__dirname, "../draft");
  try {
    fs.statSync(draftDirPath);
  } catch (error) {
    fs.mkdirSync(draftDirPath);
  }
  const filePath = path.resolve(draftDirPath, `${title}.md`);

  if (checkFileExist(filePath)) {
    console.error("[error] 文章已存在");
    return;
  }

  const content = `---
title: "${title}"
category: ""
tag: [""]
---
  `;

  writeMarkdownFile(filePath, content);
}

newDraft();
