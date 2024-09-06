const Table = require("cli-table3");
function showAiHelpTable() {
  var table = new Table({
    chars: { mid: "", "left-mid": "", "mid-mid": "", "right-mid": "-" },
  });
  table.push(
    ["S.No.", "Commands Name", "Description", "Command To Execute"]
    // ['frobnicate', 'bar', 'quuz']
  );

  table.push(
    [
      "1.",
      "AI ",
      "To Create A Template Of Express",
      "eng start ai",
    ],   
  );

  console.log(table.toString());
  console.log("\nCustom Help for 'tp' subcommand:");
        console.log("Usage: eng start ai [options]");
        console.log("Options:");
        console.log("  -h, --help     Show help information for 'ai' subcommand"); 
}

module.exports = showAiHelpTable;



