import { access, constants, rename as fsRename } from 'node:fs/promises';
import { dirname, join}  from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const file = filename => ({
  name: filename,
  path: join(__dirname, 'files', filename),
});

const newFile = file('properFilename.md');
const oldFile = file('wrongFilename.txt');
const errorMessage = 'FS operation failed';

async function isFileExist(filePath){
  try {
    await access(filePath, constants.F_OK)
    return true;
  } catch (error) {
    return false;
  }
}

const rename = async () => {
  const isOldFileExist = await isFileExist(oldFile.path);
  const isNewFileExist = await isFileExist(newFile.path);

  try {
    if(isOldFileExist && !isNewFileExist){
      await fsRename(oldFile.path, newFile.path);
    }else{
      throw new Exception();
    }
  } catch (error) {
    throw new Error(errorMessage);
  }
};

await rename();
