import { access, constants } from "node:fs/promises";

export async function isExist(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}
