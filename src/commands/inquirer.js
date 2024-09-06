const inquirer = require('inquirer');

const promptUser = async (options) => {
  const questions = [];

  if (!options.type) {
    questions.push({
      type: 'list',
      name: 'type',
      message: 'Select the project type:',
      choices: ['react', 'express'],
    });
  }

  if (!options.language) {
    questions.push({
      type: 'list',
      name: 'language',
      message: 'Select the programming language:',
      choices: ['js', 'ts'],
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
  return { ...options, ...answers };
};

module.exports = promptUser;
