#!/usr/bin/env node

const { Command } = require("commander");
const os = require("os");
const figlet = require("figlet");
const path = require("path");
const program = new Command();
const {exec} = require("child_process");
const promptUser = require("../src/commands/inquirer");
const generateProject = require("../src/commands/generate");
const showHelpTable = require("../src/components/table");
const { chooser, utilityChooser } = require("../src/commands/chooser");
const showTpHelpTable = require("../src/components/-h/table-tp-h");
const { createReactProject } = require("../src/functions/reactGenrator");
const { aiUtilityChooser } = require("../src/commands/aiUtilityChooser");
const API_KEY = require("../config").API_KEY;
const fs = require("fs");
const animateText = require("../src/components/figlet");
const showAiHelpTable = require("../src/components/-h/table-ai-h");
const {
  createExpressTemplate,
} = require("../src/codeGenrator/expressGenrator");
const { createHTMLTemplate } = require("../src/codeGenrator/htmlGenrator");
const getSpinner = require("../src/components/ora");
const takeHelpFromAI = require("../src");
const inquirer = require("inquirer");
// const countdown = require("cli-countdown");
// cli version
program.version("1.0.1").description("Project Boilerplate Generator CLI");

program
  .command("init [subCommand]")
  .alias("start")
  .description("Generate a new project")
  .option("-h, --help", "Display help for this command")
  //   .option("-t, --type <type>", "Specify project type (react, express, etc.)")
  //   .option("-l, --language <language>", "Specify programming language (js, ts)")
  //   .option("-n, --name <name>", "Specify project name")
  .action(async (subCommand, options, cmd) => {
    // const ora = (await import("ora")).default;
    const chalk = (await import("chalk")).default;
    const spinner = await getSpinner();
    // spinner.start("Getting Ready");

    // Handle 'help' subcommand
    if (
      cmd.opts().help ||
      process.argv.includes("-h") ||
      process.argv.includes("--help")
    ) {
      if (subCommand === "tp") {
        showTpHelpTable();
        return;
      } else if (subCommand === "ai") {
        showAiHelpTable();
        return;
      }
    }

    // Handle different subcommands
    if (subCommand === "get") {
      console.log("Executing 'gen init get' command");
      // Add your specific logic for the 'get' sub-command here
    } else if (subCommand === "tp") {
      const chooseOptionIs = await chooser(options);
      if (chooseOptionIs.type == "react") {
        let res = await utilityChooser(options);
        createReactProject(res);
      } else if (chooseOptionIs.type == "express") {
        console.log("Creating Express Template");
        createExpressTemplate();
      }
      switch (chooseOptionIs.type) {
        case "HTML": {
          spinner.start("Creating HTML Template");
          createHTMLTemplate();
          spinner.succeed("HTML Template Created Successfully");
          break;
        }
      }
    } else if (subCommand === "ai") {
      let option = await aiUtilityChooser(options);
      if (option.type === "Genral") {
        // let prompt = process.argv.slice(4).join(" ")
        // console.log(inquirer);
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
      } else if (option.type === "To Modify A File") {
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
            const tempDir = os.tmpdir(); // Get the temp directory path
            const tempFilePath = path.join(tempDir, "tempfile.txt");

            // Write temporary data
            fs.writeFileSync(tempFilePath, "Temporary data", "utf-8");
            // Read temporary data
            const dat = fs.readFileSync(tempFilePath, "utf-8");
            console.log(dat);
            // --------------------------------

            let preCaution = `
            1. Don't provide explanation you have to only give me the code 
            `;
            let res = await takeHelpFromAI(
              `${answers.option}\n    \n ${data}`
            );
            console.log(res); 
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
              let t = fs.writeFileSync(".engineCLI.md", res, "utf8");
               
              spinner.succeed("File Modified Successfully");
            }
          })
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      animateText(`Welcome To Engine CLI`, 100, 1000);
      // showHelpTable();
    }
  });

program.parse(process.argv);
