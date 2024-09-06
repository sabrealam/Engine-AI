const Table = require("cli-table3");
function showHelpTable() {
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
      "Template [tp] ",
      "To Create A Template Like [ Express, React, ... ]",
      "eng start tp",
    ],
    ["2.", "AI [ai] ", "Get Help From AI Right In Your Terminal", "eng start ai"],
    // ["3.", "Name", "Name of the project", "Gen", "React", "Node.js"]
  );

  console.log(table.toString());
}

module.exports = showHelpTable;
