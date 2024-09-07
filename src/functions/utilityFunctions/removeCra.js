const fs = require("fs-extra")
const path = require("path")
const util = require("util");
const { exec } = require("child_process")
const execPromise = util.promisify(exec);
 async function removeCra(){
    process.chdir(path.join(process.cwd(), "src"));
              fs.writeFileSync("App.css", "");
              fs.writeFileSync("index.css", "");
              fs.unlinkSync("reportWebVitals.js");
              fs.unlinkSync("logo.svg");
              fs.unlinkSync("app.test.js");
              fs.writeFileSync(
                "App.js",
                `import './App.css';

export default function App() {
  
  return (
    <div className="App">
      <h1>This Code Is Injected By Engine Command Line Interfase</h1>
    </div>
  );
} `
              )
              fs.writeFileSync(
                "index.js", `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); `)
              // write process.chdir to get back on folder
              process.chdir(path.join(process.cwd(), "../"));

              process.chdir(path.join(process.cwd(), "public"));
              // await execPromise(
              //   `rm -rf favicon.ico logo192.png logo512.png robots.txt`
              // );
              await fs.unlinkSync("favicon.ico");
              await fs.unlinkSync("logo192.png");
              await fs.unlinkSync("logo512.png");
              await fs.unlinkSync("robots.txt");
}

module.exports = removeCra