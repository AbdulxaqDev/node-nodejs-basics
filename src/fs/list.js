import { readdir } from 'node:fs/promises';
import { __dirname } from './utils/dirname.mjs';

const errorMessage = 'FS operation failed';

const list = async () => {
    const folderPath = __dirname(import.meta.url, 'files');
    try {
        const files = await readdir(folderPath);
        console.log(files);
    } catch (error) {
        throw new Error(errorMessage)
    }
};

await list();