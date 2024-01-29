import { stdin, stdout } from "node:process";
import { Transform } from "node:stream";

console.log("Click 'Ctrl + D' to close input");

const transform = async () => {
  const transformedStream = new Transform({
    transform(chunk, encoding, callback) {
      const input = chunk.toString().split('').reverse().join('') + "\n";
      callback(null, input);
    },
  });

  stdin.pipe(transformedStream).pipe(stdout);
};

await transform();
