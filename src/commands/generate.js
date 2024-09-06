const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
async function generateProject({ type, language, name }) {
  try {
    // Determine the source directory based on project type and language
    const sourceDir = path.join(__dirname, `../templates/${type}-${language}`);
    const ora = (await import("ora")).default;
    const chalk  = (await import("chalk")).default;
    const spinner = ora("Getting Ready").start();
    // Determine the target directory based on the provided name or default to 'workspace'
    const targetDir = name !== undefined
      ? path.join(process.cwd(), name)
      : path.join(process.cwd());

    // Ensure the target directory exists
    await fs.ensureDir(targetDir);

    // Copy the template directory to the target directory
    await fs.copy(sourceDir, targetDir);

    console.log(`Project "${name || 'workspace'}" generated successfully!`);

    // Run 'npm install' in the target directory to install dependencies
    spinner.start(`${chalk.green("Installing")} dependencies...`);
    // console.log("Installing dependencies...");
console.log(targetDir);
    exec('npm install', { cwd: targetDir }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error installing dependencies: ${error.message}`);
        spinner.fail("Error installing dependencies");
        return;
      }

      if (stderr) {
        console.error(`Error output during installation: ${stderr}`);
        spinner.warn(`${chalk.yellow("Intsallation Completed")} `);
        spinner.stop();
        return;
      }

      console.log(stdout);
      console.log("Dependencies installed successfully!");
      spinner.succeed("Project Generated");
    });
  } catch (err) {
    console.error("Error generating project:", err.message);
  }
}

module.exports = generateProject;
