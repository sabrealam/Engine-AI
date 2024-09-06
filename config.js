const dotenv = require("dotenv");
dotenv.config();
let key = process.env.API_KEY
module.exports= {
    k : key,
    name : "sabre"
}