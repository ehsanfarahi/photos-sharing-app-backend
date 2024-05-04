const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const database = require("./database/connection")

const app = express();


dotenv.config({path: "config.env"})
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
  
database();  
  
app.use(cors());  
 
app.use("/", require("./routes/routes"));

app.listen(PORT, (req, res) => {  
    console.log(`Server started on port http://127.0.0.1:${PORT}`)
})

 