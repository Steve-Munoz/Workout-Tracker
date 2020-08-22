const express = require("express");
const path = require("path");

const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

// requires the content in the models folder
// const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Listens for server port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
