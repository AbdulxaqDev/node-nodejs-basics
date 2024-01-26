import duplexZlib from "./utils/duplexZlib.js";
import { __dirname } from "../helper/dirname.js";

const compress = async () => {
  const inputFilePath = __dirname(
    import.meta.url,
    "files",
    "fileToCompress.txt"
  );
  const outputFilePath = __dirname(import.meta.url, "files", "archive.gz");

  duplexZlib(inputFilePath, outputFilePath, "compress");
};

await compress();
