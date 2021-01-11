const fs = require("fs");

module.exports = function writeMarkdownFile(filePath, data) {
  fs.writeFileSync(filePath, data);
};
