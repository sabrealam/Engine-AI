const { GoogleGenerativeAI } = require("@google/generative-ai");
// genrative ai prompt
const genAI = new GoogleGenerativeAI(`AIzaSyD4Ha__LHRz-jZhbAOdUup8ZB82uIlkanU`);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
 


async function takeHelpFromAI(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text()
  }

  module.exports = takeHelpFromAI  