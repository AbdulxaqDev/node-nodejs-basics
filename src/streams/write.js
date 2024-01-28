import { createWriteStream } from "node:fs";
import { stdin } from "node:process";

import { __dirname } from "../helper/dirname.js";

console.log("Click 'Ctrl + D' to close input");

const write = async () => {
  const writableStream = createWriteStream(
    __dirname(import.meta.url, "files", "fileToWrite.txt"),
    { encoding: "utf8"}
  );
  stdin.pipe(writableStream);
};

await write();
