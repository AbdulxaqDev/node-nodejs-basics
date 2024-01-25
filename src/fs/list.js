import { readdir } from "node:fs/promises";
import { __dirname, errorMessage } from "./utils/helpers.js";

const list = async () => {
  const folderPath = __dirname(import.meta.url, "files");
  try {
    const files = await readdir(folderPath).catch((error, data) => {
      if (error) throw new Error(errorMessage);
      return data;
    });

    console.log(files);
  } catch (error) {
    console.error(error);
  }
};

await list();
