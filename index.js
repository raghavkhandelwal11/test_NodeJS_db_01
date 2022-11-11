const express = require("express");

const app = express();
const data1 = require('./Routes/database');




app.use("/home", data1);




app.listen(process.env.PORT||8080, () => {
    console.log("Node data server created succfully!!"); 
});

