import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = join(__dirname, 'files', 'fresh.txt');

const content = 'I am fresh and young';

const create = async () => {
  try {
    await writeFile(filePath, content, { flag: 'wx' })
  } catch (error) {
		throw new Error('FS operation failed');
  }
};

await create();