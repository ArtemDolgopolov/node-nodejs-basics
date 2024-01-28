import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToCompress = join(__dirname, 'files', 'fileToCompress.txt');
const compressedFile = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream(fileToCompress);
  const destination = createWriteStream(compressedFile);

  await pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await compress();