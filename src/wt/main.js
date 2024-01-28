import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const workerPath = join(__dirname, 'worker.js');
const startNumber = 10;

const performCalculations = async () => {
  const createWorkerPromise = async (workerData) => {
    return new Promise(function (resolve, reject) {
      const worker = new Worker(workerPath, { workerData });
      worker.on('message', (data) => resolve({ status: 'resolved', data }));
      worker.on('error', (error) => reject({ status: 'error', data: null, error }));
    });
  }

  const numberOfCores = cpus().length;
  const workerPromises = [];

  for (let i = 0; i < numberOfCores; i++) {
    const dataToSend = startNumber + i;
    const workerPromise = createWorkerPromise(dataToSend);
    workerPromises.push(workerPromise);
  }

  try {
    const results = await Promise.all(workerPromises);
    console.log(results);
  } catch (error) {
    console.error(error);
  }
};

await performCalculations();