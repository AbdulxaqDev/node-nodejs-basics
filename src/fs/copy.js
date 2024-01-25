import { access, constants, cp } from 'node:fs/promises';
import { dirname, join}  from 'path';
import { fileURLToPath } from 'url';

const __dirname      = dirname(fileURLToPath(import.meta.url));

const destFolderPath = join(__dirname, 'files_copy');
const srcFolderPath  = join(__dirname, 'files');
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
