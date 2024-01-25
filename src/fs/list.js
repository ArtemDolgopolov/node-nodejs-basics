import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filesToList = join(__dirname, 'files');

const list = async () => {
  try {
    const files = await readdir(filesToList);
    for (const file of files) {
      console.log(file);
    }
  } catch {
      throw new Error('FS operation failed'); 
    }
}

await list();