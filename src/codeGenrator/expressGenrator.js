const fs = require('fs');
const path = require('path');

// Define the structure of the project
const projectStructure = {
  folders: [
    'controllers',
    'models',
    'routes',
    'middlewares',
    'views',
    'public',
    'public/css',
    'public/js',
    'public/images',
    'config'
  ],
  files: [
    { name: 'server.js', content: getServerFileContent() },
    { name: 'routes/index.js', content: getRoutesFileContent() },
    { name: 'controllers/homeController.js', content: getControllerFileContent() },
    { name: 'models/userModel.js', content: getModelFileContent() },
    { name: 'middlewares/authMiddleware.js', content: getMiddlewareFileContent() },
    { name: 'config/db.js', content: getDBConfigContent() },
    { name: 'views/index.ejs', content: getEJSContent() },
    { name: 'public/css/style.css', content: '' },
    { name: 'public/js/main.js', content: '' },
    { name: 'package.json', content: getPackageJsonContent() },
  ]
};

// Create folders
function createFolders(folders, rootDir) {
  folders.forEach(folder => {
    const folderPath = path.join(rootDir, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      // console.log(`Created folder: ${folderPath}`);
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
function createExpressTemplate(projectName = "/") {
  const projectRoot = path.join(process.cwd(), projectName);
  
  if (!fs.existsSync(projectRoot)) {
    fs.mkdirSync(projectRoot);
  }

  createFolders(projectStructure.folders, projectRoot);
  createFiles(projectStructure.files, projectRoot);

  // console.log('Express project template created successfully!');
}

// Function to return server.js content
function getServerFileContent() {
  return `
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Import Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Set view engine
app.set('view engine', 'ejs');

// Start server
app.listen(port, () => {
  console.log(\`Server is running on port \${port}\`);
});
  `;
}

// Function to return routes/index.js content
function getRoutesFileContent() {
  return `
const express = require('express');
const router = express.Router();

// Import Controller
const homeController = require('../controllers/homeController');

// Routes
router.get('/', homeController.index);

module.exports = router;
  `;
}

// Function to return controllers/homeController.js content
function getControllerFileContent() {
  return `
exports.index = (req, res) => {
  res.render('index', { title: 'Home Page' });
};
  `;
}

// Function to return models/userModel.js content
function getModelFileContent() {
  return `
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
  `;
}

// Function to return middlewares/authMiddleware.js content
function getMiddlewareFileContent() {
  return `
module.exports = (req, res, next) => {
  // Authentication logic
  next();
};
  `;
}

// Function to return config/db.js content
function getDBConfigContent() {
  return `
const mongoose = require('mongoose');
const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/myapp';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Database connection error: ', err));
  `;
}

// Function to return views/index.ejs content
function getEJSContent() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><%= title %></title>
  <link rel="stylesheet" href="/css/style.css">
</head>
<body>
  <h1>Welcome to <%= title %></h1>
  <script src="/js/main.js"></script>
</body>
</html>
  `;
}

// Function to return package.json content
function getPackageJsonContent() {
  return `
{
  "name": "express-app-template",
  "version": "1.0.0",
  "description": "Express app template",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.12.3",
    "ejs": "^3.1.6"
  },
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}
  `;
}

// Run the function to create the project
// createExpressTemplate('my-express-app');

module.exports = { createExpressTemplate };
