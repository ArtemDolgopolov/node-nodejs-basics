import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { createReadStream } from 'node:fs';
import { Transform } from 'stream';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filenamePath = join(__dirname, 'files', 'fileToRead.txt');

const transform = async () => {
  const fileToRead = createReadStream(filenamePath);

  const reverse = new Transform({
   transform(chunk, _, callback) {
    callback(null, chunk.toString('utf-8').split('').reverse().join(''))
   }
  });

  fileToRead.pipe(reverse).pipe(process.stdout);
};

await transform();