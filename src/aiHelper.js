const inquirer = require('inquirer');
const getSpinner = require('./components/ora');
const takeHelpFromAI = require('./index.js');
const fs = require('fs');
const path = require('path');
const os = require('os');
async function genralAIHelper(){
  const chalk = (await import("chalk")).default;
  const spinner = await getSpinner();
  await inquirer.default
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      name: "option",
      message: "Give Me A Prompt",
    },
  ])
  .then(async (answers) => {
    // Use user feedback for... whatever!!

    spinner.start(
      `${chalk.cyan(
        "Please wait... we are generating Your Expectation"
      )}`
    );
    let result = await takeHelpFromAI(answers.option);
    console.log(`\n \n${chalk.green(result)}`);
    spinner.succeed("Your Expectation Generated Successfully");
  });

}

async function modifyAIHelper(){
  const chalk = (await import("chalk")).default;
  const spinner = await getSpinner();
  if(process.argv[4] === undefined) {
    spinner.warn(" Please Provide File Path Run:- eng start ai [Your File Path] ");
    return
  }
  let pathParts = process.argv[4].split("\\");
  let fileName = pathParts[pathParts.length - 1];
  let filePath = path.resolve(process.cwd(), process.argv[4]);

  await inquirer.default
    .prompt([
      /* Pass your questions in here */
      {
        type: "input",
        name: "option",
        message: "Give Me A Prompt",
      },
    ])
    .then(async (answers) => {
      spinner.start(`${chalk.cyan("Fetching Data From")} ${fileName}`);
      spinner.succeed("Data Fetched Successfully");
      let data = fs.readFileSync(filePath, "utf8");
      setTimeout(() => {
        spinner.start(`${chalk.cyan("Taking Help From AI ...\n \n")}`);
      }, 1000);
      // --------------------------------
      // const tempDir = os.tmpdir(); // Get the temp directory path
      // const tempFilePath = path.join(tempDir, "tempfile.txt");

      // Write temporary data
      // fs.writeFileSync(tempFilePath, "Temporary data", "utf-8");
      // Read temporary data
      // const dat = fs.readFileSync(tempFilePath, "utf-8");
      // console.log(dat);
      // --------------------------------

      let preCaution = `
      1. Don't provide explanation you have to only give me the code 
      `;
      let res = await takeHelpFromAI(
        `${answers.option}\n  ${preCaution}  \n ${data}`
      );
      console.log(chalk.green(res)); 
      spinner.succeed("Your Expectation Generated Successfully");
      await inquirer.default
    .prompt([
      /* Pass your questions in here */
      {
        type: "list",
        name: "option",
        message: `Do You Want Insert This Code Into ${fileName}`,
        choices: ["Yes", "No"],
      }
    ])
     
    .then(async (answer) => {
      if(answer.option == "Yes"){
        let data = fs.writeFileSync(filePath, res, "utf8");
        // let t = fs.writeFileSync(".engineCLI.md", res, "utf8");
         
        spinner.succeed("File Modified Successfully");
      }
    })
    })
    .catch((error) => {
      console.log(error);
    });

}

module.exports = {genralAIHelper, modifyAIHelper}