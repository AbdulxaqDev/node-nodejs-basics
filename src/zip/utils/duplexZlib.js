import { createReadStream, createWriteStream } from "node:fs";
import { createGzip, createGunzip } from "node:zlib";

export default async function duplexZlib(inputFilePath, outputFilePath, flag) {
  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);

  if (flag === "compress") {
    readStream.pipe(createGzip()).pipe(writeStream);
  } else if (flag === "decompress") {
    readStream.pipe(createGunzip()).pipe(writeStream);
  }
}
