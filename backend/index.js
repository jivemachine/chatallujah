const express = require('express')
const app = express()

app.use("/", (req, res) => {
    res.send("Server is running.");
});

app.listen(3001, console.log("Server started PORT 3001"));
