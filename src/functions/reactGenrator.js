const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const util = require("util");
const inquirer = require("inquirer");
const execPromise = util.promisify(exec);
const propmptForDelete = require("./utilityFunctions/promptForDelete");
async function createReactProject(params) {
  if (params.type === "Vite") {
    if (params.name && params.name !== "." && params.name.trim() !== "") {
      try {
        const ora = (await import("ora")).default;
        const chalk = (await import("chalk")).default;
        const spinner = ora("Getting Ready").start();

        // Create the project directory and change to it
        fs.mkdirSync(path.join(process.cwd(), params.name));
        process.chdir(path.join(process.cwd(), params.name));

        spinner.text = `${chalk.green("Creating Project")} ...`;

        // Create Vite project
        await execPromise(`npm create vite@latest . -- --template react`);
        
        spinner.text = `${chalk.green("Installing")} dependencies...`;

        // Install dependencies
        await execPromise(`npm install`);

        spinner.succeed(`${chalk.green("Installed")} You Are Ready To Go...`);
        propmptForDelete("vite")
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const ora = (await import("ora")).default;
        const chalk = (await import("chalk")).default;
        const spinner = ora("Getting Ready").start();

        spinner.text = `${chalk.green("Creating Project")} ...`;

        // Create Vite project
        await execPromise(`npm create vite@latest . -- --template react`);

        spinner.text = `${chalk.green("Installing")} dependencies...`;

        // Install dependencies
        await execPromise(`npm install`);

        spinner.succeed(`${chalk.green("Installed")} You Are Ready To Go...`);
        propmptForDelete("vite")
      } catch (error) {
        console.error(error);
        spinner.fail("Error Creating Project");
      }
    }
  } else {
    if ( params.name !== "." && params.name.trim() !== "") {
      try {
        const ora = (await import("ora")).default;
        const chalk = (await import("chalk")).default;
        const spinner = ora("Getting Ready").start();

        // Create the project directory and change to it
        fs.mkdirSync(path.join(process.cwd(), params.name));
        process.chdir(path.join(process.cwd(), params.name));

        spinner.text = `${chalk.green("Creating Project")} ...`;
        spinner.text = `${chalk.green("Installing")} dependencies...`;
        // Create react app project
        await execPromise(`npx create-react-app .`);

        spinner.succeed(`${chalk.green("Installed")} You Are Ready To Go...`);
        propmptForDelete("cra")
      } catch (error) {
        console.error(error);
        spinner.fail("Error Creating Project");
      }
    } else {
      try {
        const ora = (await import("ora")).default;
        const chalk = (await import("chalk")).default;
        const spinner = ora("Getting Ready").start();

        spinner.text = `${chalk.green("Creating Project")} ...`;

        spinner.text = `${chalk.green("Installing")} dependencies...`;
        // Create react app project
        // await execPromise(`npx create-react-app .`);


        spinner.succeed(`${chalk.green("Installed")} You Are Ready To Go...`);
         propmptForDelete("cra")
      } catch (error) {
        console.error(error);
      }
    }
  }
}

module.exports = {
  createReactProject,
};

// async function removeCra(){
//     process.chdir(path.join(process.cwd(), "src"));
//               fs.writeFileSync("App.css", "");
//               fs.writeFileSync("index.css", "");
//               fs.unlinkSync("reportWebVitals.js");
//               fs.unlinkSync("logo.svg");
//               fs.unlinkSync("app.test.js");
//               fs.writeFileSync(
//                 "App.js",
//                 `import './App.css';

// export default function App() {
  
//   return (
//     <div className="App">
//       <h1>This Code Is Injected By Engine Command Line Interfase</h1>
//     </div>
//   );
// } `
//               )
//               fs.writeFileSync(
//                 "index.js", `import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// ); `)
//               // write process.chdir to get back on folder
//               process.chdir(path.join(process.cwd(), "../"));

//               process.chdir(path.join(process.cwd(), "public"));
//               await execPromise(
//                 `rm -rf favicon.ico logo192.png logo512.png robots.txt`
//               );
// }

// async function removeVite(params) {
//         await execPromise(`rm -rf public`);
//         process.chdir(path.join(process.cwd(), "src"));
//         await execPromise(`rm -rf assets`);
//         fs.writeFileSync("App.css", "");
//         fs.writeFileSync("index.css", "");
//         fs.writeFileSync(
//           "App.jsx",
//           `export default function App() { 

// return (
// <div>
// Injecting By Engine Command Line Interfase [ eng start ]
// </div>
// )
// }`
//         );
// }

// async function propmptForDelete(params){
//     if(params === "vite"){

//         inquirer.default
//         .prompt([
//             /* Pass your questions in here */
//             {
//               type: "list",
//               name: "option",
//               message: "Do You Want To Remove Dummy Content? And Files? ",
//               choices: ["Yes", "No"],
//             },
//           ])
//           .then(async (answers) => {
//             // Use user feedback for... whatever!!
//             if (answers.option === "Yes") {
//               removeVite(""); 
//             }
//           })
//         }else{

//             inquirer.default
//         .prompt([
//             /* Pass your questions in here */
//             {
//               type: "list",
//               name: "option",
//               message: "Do You Want To Remove Dummy Content? And Files? ",
//               choices: ["Yes", "No"],
//             },
//           ])
//           .then(async (answers) => {
//             // Use user feedback for... whatever!!
//             if (answers.option === "Yes") {
//               removeCra();
//             }
//           })
//         }
// }
 
