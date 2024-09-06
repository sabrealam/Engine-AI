const inquirer = require('inquirer');
 
const aiUtilityChooser = async (options) => {
  const questions = [];

  if (!options.type) {
    questions.push({
      type: 'list',
      name: 'type',
      message: 'Select type of help you want to get:',
      choices: ["Genral", "To Modify A File"],
    });
  }
//   if (!options.name) {
//     questions.push({
//       type: 'input',
//       name: 'name',
//       message: 'Enter the project name:',
//     });
//   }

  

  // This is the key line that may cause issues if `inquirer` is not correctly imported
  const answers = await inquirer.default.prompt(questions);
  return { ...options,  ...answers };
};

module.exports = { aiUtilityChooser};
