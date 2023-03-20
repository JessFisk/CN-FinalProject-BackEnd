require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 5001;

// const User = require("/users/model");
const app = express();

app.use(express.json());

app.get("/health", (req, res) =>
    res.status(200).json({ message: "API is working" }));
    
    app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});