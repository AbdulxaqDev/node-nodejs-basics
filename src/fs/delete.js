import { unlink } from "node:fs/promises";
import { __dirname, errorMessage } from "./utils/helpers.js";

const remove = async () => {
  const fileToRemove = __dirname(import.meta.url, "files", "fileToRemove.txt");
  try {
    await unlink(fileToRemove).catch((error) => {
      if (error) {
        throw new Error(errorMessage);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

await remove();
