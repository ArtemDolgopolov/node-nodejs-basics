import { fileURLToPath } from 'url';
import { join, dirname } from 'path';
import { createWriteStream } from 'node:fs';
import process from 'node:process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filenamePath = join(__dirname, 'files', 'fileToWrite.txt');

const write = async () => {
  const fileToWrite = createWriteStream(filenamePath, {flags: 'a'});
  process.stdin.pipe(fileToWrite);
  console.log('Type some text. Press Enter first, then Ctrl + C to exit'); 
};

await write();