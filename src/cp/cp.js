import { fork } from "node:child_process";

import { __dirname } from "../helper/dirname.js";

const spawnChildProcess = async (args) => {
  const childProcess = fork(
    __dirname(import.meta.url, "files", "script.js"), args, {silent: true});

  process.stdin.pipe(childProcess.stdin)

  childProcess.stdout.pipe(process.stdout);
};

spawnChildProcess(["These", "are", "arguments"]);
