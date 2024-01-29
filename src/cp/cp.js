import { spawn } from "node:child_process";

import { __dirname } from "../helper/dirname.js";

const spawnChildProcess = async (args) => {
  const childProcess = spawn(
    "node",
    [__dirname(import.meta.url, "files", "script.js"), ...args],
    {
      stdio: ["pipe"],
    }
  );

  childProcess.stdout.on("data", (data) => console.log(data.toString()));

  childProcess.stdin.write("Message from main process");
  childProcess.stdin.end();
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["This", "is", "message"]);
