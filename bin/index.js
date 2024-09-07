#!/usr/bin/env node

const { Command } = require("commander");
const program = new Command();
const { chooser, utilityChooser } = require("../src/commands/chooser");
const showTpHelpTable = require("../src/components/-h/table-tp-h");
const { createReactProject } = require("../src/functions/reactGenrator");
const { aiUtilityChooser } = require("../src/commands/aiUtilityChooser");
const animateText = require("../src/components/figlet");
const showAiHelpTable = require("../src/components/-h/table-ai-h");
const {
  createExpressTemplate,
} = require("../src/codeGenrator/expressGenrator");
const showHelpTable = require("../src/components/table");
const { createHTMLTemplate } = require("../src/codeGenrator/htmlGenrator");
const getSpinner = require("../src/components/ora");
const { genralAIHelper, modifyAIHelper } = require("../src/aiHelper");
const packageJson = require("../package.json");
// cli version
program.version(packageJson.version, "-v, --version", "");
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
    if (subCommand === "tp") {
      const chooseOptionIs = await chooser(options);
      if (chooseOptionIs.type == "react") {
        
        let res = await utilityChooser(options);
        createReactProject(res);
      } else if (chooseOptionIs.type == "express") {
        spinner.start("Creating Express Template");
        createExpressTemplate();
        spinner.succeed("Express Template Created Successfully");
      }
      switch (chooseOptionIs.type) {
        case "HTML": {
          spinner.start("Creating HTML Template");
          createHTMLTemplate();
          spinner.succeed("HTML Template Created Successfully");
          break;
        }
        case "Portfolio":{
          spinner.start("Creating Portfolio Template");
          createHTMLTemplate();
          spinner.succeed("HTML Template Created Successfully");
          break;
        }
      }
    } else if (subCommand === "ai") {
      let option = await aiUtilityChooser(options);
      if (option.type === "Genral") {
        genralAIHelper();
      } else if (option.type === "To Modify A File") {
        modifyAIHelper();
      }
    } else if (subCommand == "-h") {
      showHelpTable();
    } else {
      animateText(`Welcome To Engine CLI`, 100, 1000);
    }
  });

program.parse(process.argv);
