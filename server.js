const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Yahoo OAuth Server is running!");
});

app.get("/callback", (req, res) => {
    res.send("OAuth Callback Received: " + JSON.stringify(req.query));
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
