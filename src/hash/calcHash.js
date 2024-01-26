import { createReadStream } from "fs";
import { dirname, join } from "path";
import { createHash } from "crypto";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  const hash = createHash("sha256");

  const streamToHash = createReadStream(
    join(__dirname, "files", "fileToCalculateHashFor.txt")
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
