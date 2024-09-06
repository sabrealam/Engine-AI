const figlet = require("figlet");

const animateText = async (text, delay) => {
    let index = 0;
    const chalk  = (await import("chalk")).default;
    const type = () => {
      // Clear the terminal
      console.clear();
  
      // Create a styled figlet text
      const styledText = chalk.green.bold(figlet.textSync(text.substring(0, index), {
        horizontalLayout: 'full'
      }));
  
      // Print the styled text
      console.log(styledText);
  
      // Increment the index
      if (index < text.length) {
        index++;
        setTimeout(type, delay);
      }
    };
  
    type();
    
  };

  module.exports = animateText