import fs from "fs";

export default function writeMarkdownFile(filePath: string, data: string) {
  fs.writeFileSync(filePath, data);
}
