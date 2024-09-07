const fs = require("fs-extra")
const path = require("path")
const util = require("util");
const { exec } = require("child_process")
const execPromise = util.promisify(exec);
 async function removeVite(params) {
    // await execPromise(`rm -rf public`);
    await fs.remove(`public`);
    process.chdir(path.join(process.cwd(), "src"));
    // await execPromise(`rm -rf assets`);
    await fs.remove(`assets`);
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