const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const srcFolder = './src';
const distFolder = './dist';
const srcFolderStyle = './src/style';

// Ensure the dist folder exists
if (!fs.existsSync(distFolder)) {
  fs.mkdirSync(distFolder);
}

// Get a list of files in the src folder
const files = fs.readdirSync(srcFolder);

//compile scss
const srcStyleFile = path.join(srcFolderStyle, "main.scss");
execSync(`sass --watch ${srcStyleFile} ${distFolder}/style.css`, { stdio: 'inherit' });
// // Transpile and copy each file to the dist folder
// files.forEach((file) => {
//   const srcFile = path.join(srcFolder, file);
//   const distFile = path.join(distFolder, file);

//   // Use Babel to transpile the file
//   execSync(`npx babel ${srcFile} --out-file ${distFile}`, { stdio: 'inherit' });
// });

console.log('Transpilation complete.');