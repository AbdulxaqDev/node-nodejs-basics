import { readFile } from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const errorMessage = 'FS operation failed';

const read = async () => {
    try{
        const filePath = join(__dirname, 'files', 'fileToRead.txt');
        const content = await readFile(filePath, { encoding: 'utf8' });
        console.log(content);
    } catch(error){
        throw new Error(errorMessage)
    }

};

await read();