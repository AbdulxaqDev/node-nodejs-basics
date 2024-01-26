import { createReadStream } from "fs";
import { stdout } from "process";

import { __dirname } from "../helper/dirname.js";

const read = async () => {
  const stream = createReadStream(
    __dirname(import.meta.url, "files", "fileToRead.txt")
  );
  stream.pipe(stdout);
};

await read();
