import { createReadStream, createWriteStream } from "fs";
import { createGzip, createGunzip } from "zlib";

export default async function duplexZlib(inputFilePath, outputFilePath, flag) {
  const readStream = createReadStream(inputFilePath);
  const writeStream = createWriteStream(outputFilePath);

  if (flag === "compress") {
    readStream.pipe(createGzip()).pipe(writeStream);
  } else if (flag === "decompress") {
    readStream.pipe(createGunzip()).pipe(writeStream);
  }
}
