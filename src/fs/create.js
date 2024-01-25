import { writeFile }     from 'fs/promises';
import { __dirname } from './utils/dirname.mjs';

const fileName     = 'fresh.txt';
const fileConteent = 'I am fresh and young';
const filePath     = __dirname(import.meta.url, 'files', fileName);
const errorMessage = 'FS operation failed';

const create = async () => {
  try {
    await writeFile(filePath, fileConteent, {flag: "wx"});
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await create();
