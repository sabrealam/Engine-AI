const removeCra = require("./removeCra")
const removeVite = require("./removeVite")

const inquirer = require("inquirer");
async function propmptForDelete(params) {
  if (params === "vite") {
    inquirer.default
      .prompt([
        /* Pass your questions in here */
        {
          type: "list",
          name: "option",
          message: "Do You Want To Remove Dummy Content? And Files? ",
          choices: ["Yes", "No"],
        },
      ])
      .then(async (answers) => {
        // Use user feedback for... whatever!!
        if (answers.option === "Yes") {
          removeVite("");
        }
      });
  } else {
    inquirer.default
      .prompt([
        /* Pass your questions in here */
        {
          type: "list",
          name: "option",
          message: "Do You Want To Remove Dummy Content? And Files? ",
          choices: ["Yes", "No"],
        },
      ])
      .then(async (answers) => {
        // Use user feedback for... whatever!!
        if (answers.option === "Yes") {
          removeCra();
        }
      });
  }
}

module.exports = propmptForDelete