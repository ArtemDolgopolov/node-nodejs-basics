import { createUnzip } from 'node:zlib';
import { pipeline } from 'stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToDecompress = join(__dirname, 'files', 'archive.gz');
const decompressedFile = join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
  const unzip = createUnzip();
  const source = createReadStream(fileToDecompress);
  const destination = createWriteStream(decompressedFile);

  source.on('error', (error) => {
    console.error('Error reading file to decompress:', error);
  });

  destination.on('error', (error) => {
    console.error('Error writing decompressed file:', error);
  });

  unzip.on('error', (error) => {
    console.error('Error decompressing archive:', error);
  });

  try {
    await pipeline(source, unzip, destination);
    console.log('Decompression completed successfully');
  } catch (error) {
    console.error('Pipeline error:', error);
  }   
};

await decompress();