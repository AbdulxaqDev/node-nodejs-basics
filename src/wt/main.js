import { cpus } from "node:os";
import { Worker } from "node:worker_threads";

import { __dirname } from "../helper/dirname.js";

function workerCreator(n) {
  return new Promise((resolve, reject) => {
    const workerFilePath = __dirname(import.meta.url, "worker.js");

    const worker = new Worker(workerFilePath, {
      workerData: n,
    });

    worker.on("message", (result) => {
      resolve(result);
    });

    worker.on("error", (error) => {
      reject(error);
    });
  });
}

const performCalculations = async () => {
  const workersNum = cpus().length;
  const workerPromises = [];

  for (let i = 0; i < workersNum; i++) {
    workerPromises.push(
      workerCreator({
        n: 10 + (i + 1),
      })
        .then((result) => ({ data: result, status: "resolved" }))
        .catch((e) => ({ data: null, status: "error" }))
    );
  }

  try {
    const promisesResult = await Promise.allSettled(workerPromises);
    const results = promisesResult.map((promiseResult) => promiseResult.value);
    console.log(results);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

await performCalculations();
