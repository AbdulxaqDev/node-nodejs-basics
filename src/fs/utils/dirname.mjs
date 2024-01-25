import { dirname, join} from 'path';
import { fileURLToPath } from 'url';

export function __dirname(metaUrl, ...path){
    return join(dirname(fileURLToPath(metaUrl)), ...path);
}