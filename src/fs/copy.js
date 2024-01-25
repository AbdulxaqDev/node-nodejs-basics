import { readdir, copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

import { __dirname, isExist, errorMessage } from "./utils/helpers.js";

const destFolderPath = __dirname(import.meta.url, "files_copy");
const srcFolderPath = __dirname(import.meta.url, "files");

const copy = async () => {
  const isSrcExist = await isExist(srcFolderPath);
  const isDestExist = await isExist(destFolderPath);

  try {
    if (isSrcExist && !isDestExist) {
      const files = await readdir(srcFolderPath);
      await mkdir(destFolderPath);

      for (const file of files) {
        await copyFile(join(srcFolderPath, file), join(destFolderPath, file));
      }
    } else {
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error(error);
  }
};

await copy();
