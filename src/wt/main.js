import { Worker, isMainThread, parentPort, workerData } from "worker_threads";
import { cpus } from "os";
import { __dirname } from "../helper/dirname.js";

const performCalculations = async () => {
  const workerFilePath = __dirname(import.meta.url, "worker.js");

  if (isMainThread) {
    const workersNum = cpus().length;

    for (let i = 0; i < workersNum; i++) {
      const worker = new Worker(workerFilePath, {
        workerData: {
          id: i,
          task: 10 + (i + 1),
        },
      });
      worker.on("message", (message) => {
        console.log(`Calculated by ${worker.threadId}: ${message}`);
      });
    }
  }
};

await performCalculations();
