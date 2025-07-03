import { readFile } from "node:fs/promises";
const fileLanguageContent = await readFile(
  "./pages/en/blog/programming/try.md",
  "utf8"
).catch(() => undefined);
console.log(fileLanguageContent);
