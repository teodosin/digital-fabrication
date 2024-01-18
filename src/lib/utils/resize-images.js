import { readdir, unlink, rename } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const directoryPath = join(process.cwd(), 'static');
const maxWidth = 1080;
const maxHeight = 1080;

readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach((file) => {
    const filePath = join(directoryPath, file);
    const tempFilePath = `${filePath}_temp`;

    sharp(filePath)
      .resize(maxWidth, maxHeight, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .toFile(tempFilePath, (err) => {
        if (err) {
          console.log('Error resizing image: ', err);
        } else {
          unlink(filePath, (err) => {
            if (err) {
              console.log('Error deleting original file: ', err);
            } else {
              rename(tempFilePath, filePath, (err) => {
                if (err) {
                  console.log('Error renaming temporary file: ', err);
                } else {
                  console.log(`Resized image saved as ${filePath}`);
                }
              });
            }
          });
        }
      });
  });
});