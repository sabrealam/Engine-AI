const fs = require("fs")
const path = require("path")
const util = require("util");
const { exec } = require("child_process")
const execPromise = util.promisify(exec);
 async function removeVite(params) {
    await execPromise(`rm -rf public`);
    process.chdir(path.join(process.cwd(), "src"));
    await execPromise(`rm -rf assets`);
    fs.writeFileSync("App.css", "");
    fs.writeFileSync("index.css", "");
    fs.writeFileSync(
      "App.jsx",
      `export default function App() { 

return (
<div>
Injecting By Engine Command Line Interfase [ eng start ]
</div>
)
}`
    );
}
module.exports = removeVite