import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToRead = join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
   try {
    const consoleText = await readFile(fileToRead, 'utf-8');
    console.log(consoleText);
   } catch (err) {
    throw new Error('FS operation failed'); 
  }
};

await read();