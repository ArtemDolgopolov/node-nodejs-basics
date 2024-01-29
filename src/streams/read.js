import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { createReadStream } from 'node:fs';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filenamePath = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
  const fileToRead = createReadStream(filenamePath);

  fileToRead.on('data', (data) => {
    process.stdout.write(`${data}\n`);
  });

  fileToRead.on('error', (err) => {
    console.err(err);
  });
};

await read();