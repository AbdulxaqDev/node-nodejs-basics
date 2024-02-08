import { createReadStream } from "node:fs";
import { stdout } from "node:process";

import { __dirname } from "../helper/dirname.js";

const read = async () => {
  const stream = createReadStream(
    __dirname(import.meta.url, "files", "fileToRead.txt")
  );
  stream.pipe(stdout);
};

await read();
