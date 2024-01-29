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
      resolve({ status: "resolved", data: result });
    });

    worker.on("error", (error) => {
      reject({ status: "error", data: null });
    });
  });
}

const performCalculations = async () => {
  const workersNum = cpus().length;
  const workerPromises = [];

  for (let i = 0; i < workersNum; i++) {
    const worker = workerCreator(10 + i);
    workerPromises.push(worker);
  }

  const results = await Promise.allSettled(workerPromises).then(
    (calculations) =>
      calculations.map(({ status, value, reason }) =>
        status === "fulfilled" ? value : reason
      )
  );

  console.log(results);
};

await performCalculations();
