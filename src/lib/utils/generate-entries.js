
import fs from 'fs';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define the directory containing the markdown files
const markdownDir = path.resolve(__dirname, '../../posts');

// Read the directory
const files = fs.readdirSync(markdownDir);

// Filter for markdown files and generate entries
const entries = files
  .filter((/** @type {any} */ file) => path.extname(file) === '.md')
  .map((/** @type {any} */ file) => `/${path.basename(file, '.md')}`);

// Write the entries to a JSON file
fs.writeFileSync(path.resolve(__dirname, 'prerender-entries.json'), JSON.stringify(entries));