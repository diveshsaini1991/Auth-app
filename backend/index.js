const bodyParser = require("body-parser");
const express = require("express");
const app = express();
require("dotenv").config();
require("./models/db")
const cors = require("cors");
const authrouter = require("./routes/authRouter");
const productrouter = require("./routes/productRouter");
const morgan = require("morgan");
app.use(morgan("tiny"));
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: 'https://auth-app-frontend-dun.vercel.app'
}));

app.get("/ping",(req,res)=>{
    res.send("PONG");
})


app.use("/auth",authrouter)
app.use("/products",productrouter)

app.listen(PORT,()=>{
    console.log(`Server live at http://localhost:${PORT}`);
})
