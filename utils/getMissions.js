import fsPromises from 'fs/promises';
import path from 'path'

export async function getMissions() {
    const filePath = path.join(process.cwd(), 'utils/misions.json');
    const jsonData = await fsPromises.readFile(filePath);
    const objectData = JSON.parse(jsonData);
    return objectData;
  }
