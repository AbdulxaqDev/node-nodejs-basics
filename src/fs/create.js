import { writeFile } from "node:fs/promises";

import { __dirname, errorMessage } from "./utils/helpers.js";

const filePath = __dirname(import.meta.url, "files", "fresh.txt");

const create = async () => {
  try {
    await writeFile(filePath, "I am fresh and young", { flag: "wx" }).catch(
      (error) => {
        if (error) {
          throw new Error(errorMessage);
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
};

await create();
