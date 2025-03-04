import { workerData, parentPort } from "node:worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const fabNum = nthFibonacci(workerData)
  try {
    parentPort.postMessage(fabNum);
  } catch (error) {
    console.error(error);
  }
};

sendResult();
