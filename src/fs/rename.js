import { rename as fsRename } from "node:fs/promises";

import { __dirname, isExist, errorMessage } from "./utils/helpers.js";

const newFile = __dirname(import.meta.url, "files", "properFilename.md");
const oldFile = __dirname(import.meta.url, "files", "wrongFilename.txt");

const rename = async () => {
  const isOldFileExist = await isExist(oldFile);
  const isNewFileExist = await isExist(newFile);

  try {
    if (isOldFileExist && !isNewFileExist) {
      await fsRename(oldFile, newFile);
    } else {
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.log(error);
  }
};

await rename();
