import { access, constants, unlink } from 'node:fs/promises';
import { __dirname } from './utils/dirname.mjs';

const file = filename => ({
    name: filename,
    path: __dirname(import.meta.url, 'files', filename),
});

const fileToRemove = file('fileToRemove.txt');
const errorMessage = 'FS operation failed';

async function isFileExist(filePath) {
    try {
        await access(filePath, constants.F_OK)
        return true;
    } catch (error) {
        return false;
    }
}


const remove = async () => {
    const isExist = await isFileExist(fileToRemove.path);
    try {
        if (isExist) {
            unlink(fileToRemove.path);
        } else {
            throw new Error(errorMessage);
        }
    } catch (error) {
        throw new Error(errorMessage);
    }
};

await remove();