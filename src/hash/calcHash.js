import { createReadStream } from "node:fs";
import { createHash } from "node:crypto";

import { __dirname } from "../helper/dirname.js";


const calculateHash = async () => {
  const hash = createHash("sha256");

  const streamToHash = createReadStream(
    __dirname(import.meta.url, "files", "fileToCalculateHashFor.txt")
  );

  streamToHash.on("data", (data) => {
    hash.update(data);
  });

  streamToHash.on("end", () => {
    const hashedStream = hash.digest("hex");
    console.log(hashedStream);
  });
};

await calculateHash();
