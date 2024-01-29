import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToDelete = join(__dirname, 'files', 'fileToRemove.txt');

const remove = async () => {
  try {
    await unlink(fileToDelete);
  } catch (err) {
    throw new Error('FS operation failed'); 
  } 
};

await remove();