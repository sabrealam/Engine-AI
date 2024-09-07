const inquirer = require('inquirer');

const chooser = async (options) => {
  const questions = [];

  if (!options.type) {
    questions.push({
      type: 'list',
      name: 'type',
      message: 'Select the project type:',
      choices: ['react', 'express', "HTML", "Portfolio"],
      searchable: true,
      
    });
  }

  

  // This is the key line that may cause issues if `inquirer` is not correctly imported
  const answers = await inquirer.default.prompt(questions);
  return { ...options,  ...answers };
};
const utilityChooser = async (options) => {
  const questions = [];

  if (!options.type) {
    questions.push({
      type: 'list',
      name: 'type',
      message: 'Select the template type',
      choices: ["Vite", "Create React App"],
    });
  }
  if (!options.name) {
    questions.push({
      type: 'input',
      name: 'name',
      message: 'Enter the project name:',
    });
  }

  

  // This is the key line that may cause issues if `inquirer` is not correctly imported
  const answers = await inquirer.default.prompt(questions);
  return { ...options,  ...answers };
};

module.exports = {chooser, utilityChooser};
