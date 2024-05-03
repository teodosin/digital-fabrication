import { readdir, unlink, rename } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const directoryPath = join(process.cwd(), 'static');
const maxWidth = 1080;
const maxHeight = 1080;

/**
 * @param {string} directoryPath
 */
function processDirectory(directoryPath) {
  readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
      const filePath = join(directoryPath, file.name);
      if (file.isDirectory()) {
        processDirectory(filePath);
      } else {
        sharp(filePath)
          .metadata()
          .then((metadata) => {
            const { width, height } = metadata;
            if (width === undefined || height === undefined) {
              return;
            }
            
            if (width > maxWidth || height > maxHeight ) {
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
            } else {
              console.log(`Image ${filePath} is within the size limit. Skipping resizing.`);
            }
          })
          .catch((err) => {
            console.log('Error reading image metadata: ', err);
          });
      }
    });
  });
}

processDirectory(directoryPath);
