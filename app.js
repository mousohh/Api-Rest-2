const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

var cors = require('cors')


// settings
const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));