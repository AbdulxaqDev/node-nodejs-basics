import { access, constants, cp } from 'node:fs/promises';
import { __dirname } from './utils/dirname.mjs';

const destFolderPath = __dirname(import.meta.url, 'files_copy');
const srcFolderPath  = __dirname(import.meta.url, 'files');
const errorMessage   = 'FS operation failed';

async function isFolderExist(folderPath){
  try {
    await access(folderPath, constants.F_OK)
    return true;
  } catch (error) {
    return false;
  }
}

const copy = async () => {
  try {

    if(await isFolderExist(srcFolderPath) 
      && !(await isFolderExist(destFolderPath))){

        await cp(srcFolderPath, destFolderPath, {
           recursive: true,
           errorOnExist: true,
           force: false,
        });

    }else{
      throw new Exception();
    }

  } catch (error) { 
    throw new Error(errorMessage);
  }
};

await copy();
