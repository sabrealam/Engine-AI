const fs = require('fs');
const path = require('path');
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a basic HTML file.</p>
    <script src="script.js"></script>
</body>
</html>
`;

const cssContent = `
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
}

p {
    color: #666;
}
`;

const jsContent = `
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');
});
`;
async function simpleHTMLGenrator(params) {

// Define the content for each file


// Write the files to the filesystem
fs.writeFileSync('index.html', htmlContent);
fs.writeFileSync('style.css', cssContent);
fs.writeFileSync('script.js', jsContent);
}

module.exports = simpleHTMLGenrator;