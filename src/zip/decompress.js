import { __dirname } from "../helper/dirname.js";
import duplexZlib from "./utils/duplexZlib.js";

const filePath = (fileName) => __dirname(import.meta.url, "files", fileName);

const decompress = async () => {
  const inputFilePath = filePath("archive.gz");
  const outputFilePath = filePath("fileToCompress.txt");

  duplexZlib(inputFilePath, outputFilePath, "decompress");
};

await decompress();
