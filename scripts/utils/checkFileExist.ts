import fs from "fs";

export default function checkFileExist(path: string) {
  let isExist = true;

  try {
    fs.statSync(path);
  } catch (error) {
    isExist = false;
  }

  return isExist;
}
