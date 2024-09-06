const fs = require('fs');
const path = require('path');

// Define the structure of the project
const projectStructure = {
  folders: [
    'css',
    'images',
    'projects',
    'resume',
    'script'
  ],
  files: [
    { name: '.gitignore', content: '' },
    { name: 'index.html', content: getHTMLContent() },
    { name: 'README.md', content: '' }
  ]
};

// Create folders
function createFolders(folders, rootDir) {
  folders.forEach(folder => {
    const folderPath = path.join(rootDir, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
    //   console.log(`Created folder: ${folderPath}`);
    }
  });
}

// Create files
function createFiles(files, rootDir) {
  files.forEach(file => {
    const filePath = path.join(rootDir, file.name);
    fs.writeFileSync(filePath, file.content);
    // console.log(`Created file: ${filePath}`);
  });
}

// Generate project structure
async function createHTMLTemplate(projectName = "/") {
  const projectRoot = path.join(process.cwd(), projectName);
  
  if (!fs.existsSync(projectRoot)) {
    fs.mkdirSync(projectRoot);
  }

  createFolders(projectStructure.folders, projectRoot);
  createFiles(projectStructure.files, projectRoot);

//   console.log('Project template created successfully!');
}

// Function to return index.html content
function getHTMLContent() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Project</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Welcome to my project!</h1>
  <script src="script/main.js"></script>
</body>
</html>
  `;
}

// Run the function to create the project
// createHTMLTemplate('my-project');

module.exports = { createHTMLTemplate };
