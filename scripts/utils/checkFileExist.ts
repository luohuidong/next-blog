const fs = require("fs");

module.exports = function checkFileExist(path) {
  let isExist = true;

  try {
    fs.statSync(path);
  } catch (error) {
    isExist = false;
  }

  return isExist;
};
