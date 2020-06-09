const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const route = require("./routes/route");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/ecommerceDB', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set("useCreateIndex", true);

app.use("/api", route);

app.listen(3000, function()
{
    console.log("Listening on port 3000");
})
