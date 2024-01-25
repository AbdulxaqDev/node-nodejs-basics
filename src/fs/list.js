import { readdir } from 'node:fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const errorMessage = 'FS operation failed';

const list = async () => {
    const folderPath = join(__dirname, 'files');
    try {
        const files = await readdir(folderPath);
        console.log(files);
    } catch (error) {
        throw new Error(errorMessage)
    }
};

await list();