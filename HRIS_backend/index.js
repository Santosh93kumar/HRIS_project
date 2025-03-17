const express = require("express");
const cors = require("cors");
const path = require('path');
let mongoose = require("mongoose")
const { mainRouts } = require("./App/mainRouts");

const app = express();

// Middleware
app.use(
  cors({
    origin: "https://hris-project-1.onrender.com", // Remove trailing slash
  })
);
app.use(express.json());

// Routes
app.use(mainRouts);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", message: "Server is running smoothly!" });
});

// Serve static files from 'uploads/EmployeeImage'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use("/uploads/BalanceImage", express.static("uploads/BalanceImage"));




mongoose.connect(`mongodb://127.0.0.1:27017/HRISPROJECT`)
.then(() => {
    console.log("Connected to MongoDB");
  })
app.listen("8000")
