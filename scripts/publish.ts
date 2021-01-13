import { exec } from "child_process";
import path from "path";

import checkFileExist from "./utils/checkFileExist";

function publish() {
  const filename = process.argv[2];

  if (!filename) {
    console.error("[error] 请输入文件名");
    return;
  }

  const originFilePath = path.resolve(
    __dirname,
    "..",
    "draft",
    `${filename}.md`
  );
  const distFilePath = path.resolve(__dirname, "..", "posts", `${filename}.md`);

  if (!checkFileExist(originFilePath)) {
    console.error("[error] 文件不存在");
    return;
  }

  exec(`git mv ${originFilePath} ${distFilePath}`, (error) => {
    if (error) {
      exec(`mv ${originFilePath} ${distFilePath}`);
    }
  });
}

publish();
