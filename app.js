const express = require("express");
const route = require("./routes/route");
const app = express();

app.use("/api", route);

app.listen(3000, function()
{
    console.log("Listening on port 3000");
})
