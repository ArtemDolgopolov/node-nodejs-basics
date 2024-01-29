import { copyFile, mkdir, readdir, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __dirnameOrig = join(__dirname, 'files');
const __dirnameCopy = join(__dirname, 'files_copy');

const copy = async () => {
  try {
    await access(__dirnameOrig);

    try {
      await access(__dirnameCopy);
      throw new Error('FS operation failed');
    } catch (err) {
      if (err.code === 'ENOENT') await mkdir(__dirnameCopy, { recursive: true });
      else throw err;
    }

    const files = await readdir(__dirnameOrig);

    for (const file of files) {
      const sourcePath = join(__dirnameOrig, file);
      const destinationPath = join(__dirnameCopy, file);
      await copyFile(sourcePath, destinationPath);
    }

    console.log('Success');
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();