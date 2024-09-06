const Table = require("cli-table3");
function showTpHelpTable() {
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
      "Express ",
      "To Create A Template Of Express",
      "eng start tp express",
    ], 
    [
      "2.",
      "React ",
      "To Create A Template Of React Application",
      "eng start tp react",
    ], 
  );

  console.log(table.toString());
  console.log("\nCustom Help for 'tp' subcommand:");
        console.log("Usage: eng start tp [options]");
        console.log("Options:");
        console.log("  -h, --help     Show help information for 'tp' subcommand");
}

module.exports = showTpHelpTable;



