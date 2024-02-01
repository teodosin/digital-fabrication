const fs = require('fs');
const path = require('path');
const ColorThief = require('color-thief');
const { compile } = require('mdsvex');
const { parseFrontmatter } = require('mdsvex/lib/parse_frontmatter.js');

const postsDirectory = path.join(__dirname, 'src/posts');
const postFiles = fs.readdirSync(postsDirectory);

postFiles.forEach(async (/** @type {any} */ file) => {
  const filePath = path.join(postsDirectory, file);
  const rawMarkdown = fs.readFileSync(filePath, 'utf-8');
  
  // Parse the front matter
  const { content, metadata } = parseFrontmatter(rawMarkdown);

  // Extract the dominant color from the cover image
  const imageBuffer = fs.readFileSync(path.join(__dirname, metadata.coverImage));
  const dominantColor = await ColorThief.getColorFromBuffer(imageBuffer);

  // Add the dominant color to the front matter
  metadata.dominantColor = dominantColor;

  // Stringify the updated front matter and content
  const updatedMarkdown = `---\n${JSON.stringify(metadata)}\n---\n${content}`;

  // Write the updated Markdown back to the file
  fs.writeFileSync(filePath, updatedMarkdown);
});