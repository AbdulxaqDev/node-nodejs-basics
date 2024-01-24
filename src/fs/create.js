import { writeFile }     from 'fs/promises';
import { dirname, join}  from 'path';
import { fileURLToPath } from 'url';

const __dirname    = dirname(fileURLToPath(import.meta.url));

const fileName     = 'fresh.txt';
const fileConteent = 'I am fresh and young';
const filePath     = join(__dirname, 'files', fileName);
const errorMessage = 'FS operation failed';

const create = async (fileConteent, filePath, errorMessage) => {
  try {
    await writeFile(filePath, fileConteent, {flag: "wx"});
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await create(fileConteent, filePath, errorMessage);
