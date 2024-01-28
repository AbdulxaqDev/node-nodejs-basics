import { readFile } from "node:fs/promises";

import { __dirname, errorMessage } from "./utils/helpers.js";

const read = async () => {
  try {
    const filePath = __dirname(import.meta.url, "files", "fileToRead.txt");
    const content = await readFile(filePath, { encoding: "utf8" }).catch(() => {
      throw new Error(errorMessage);
    });

    console.log(content);
  } catch (error) {
    console.error(error);
  }
};

await read();
