import { stdin, stdout } from "process";
import { Transform } from "stream";

console.log("Click 'Ctrl + D' to close input");

const transform = async () => {
  const transformedStream = new Transform({
    transform(chunk, encoding, callback) {
      const input = chunk.toString().split('').reverse().join('');
      callback(null, input);
    },
  });

  stdin.pipe(transformedStream).pipe(stdout);
};

await transform();
