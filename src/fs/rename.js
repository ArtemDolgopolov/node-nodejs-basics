import * as fs from "node:fs/promises";
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const fileToRename = join(__dirname, 'files', 'wrongFilename.txt');
const properFileName = join(__dirname, 'files', 'properFilename.md');

const rename = async () => {
  try {
    await fs.rename(fileToRename, properFileName);
  } catch {
      throw new Error('FS operation failed');
    } 
};

await rename();