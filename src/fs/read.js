import { readFile } from 'node:fs/promises';
import { __dirname } from './utils/dirname.mjs';

const errorMessage = 'FS operation failed';

const read = async () => {
    try{
        const filePath = __dirname(import.meta.url, 'files', 'fileToRead.txt');
        const content = await readFile(filePath, { encoding: 'utf8' });
        console.log(content);
    } catch(error){
        throw new Error(errorMessage)
    }

};

await read();