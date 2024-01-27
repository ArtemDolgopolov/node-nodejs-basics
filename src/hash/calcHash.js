import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filename = join(__dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
 const hash = createHash('sha256');
 const input = createReadStream(filename);
 
 input.on('readable', () => {
   const data = input.read();
   if (data)
     hash.update(data);
   else {
     console.log(`The hash is: ${hash.digest('hex')}`);
   }
 });
};

await calculateHash();