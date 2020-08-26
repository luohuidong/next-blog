const { exec } = require("child_process");
const path = require("path");

const checkFileExist = require("./utils/checkFileExist");
const getFormattedDate = require("./utils/getFormattedDate");

function publish() {
  const title = process.argv[2];
  if (!title) {
    console.error("[error] 请输入文章标题");
    return;
  }

  const originFilePath = path.resolve(__dirname, "..", "draft", `${title}.md`);
  console.log("publish -> originFilePath", originFilePath);
  const distFilePath = path.resolve(
    __dirname,
    "..",
    "posts",
    `${new Date().valueOf()}.md`
  );

  if (!checkFileExist(originFilePath)) {
    console.error("[error] 发布文章不存在");
    reutrn;
  }

  exec(`git mv ${originFilePath} ${distFilePath}`, (error) => {
    if (error) {
      exec(`mv ${originFilePath} ${distFilePath}`);
    }
  });
}

publish();
