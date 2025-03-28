const express = require("express");
const cors = require("cors");
const path = require('path');
let mongoose = require("mongoose")
const { mainRouts } = require("./App/mainRouts");
require("dotenv").config();

const app = express();

// Middleware
app.use(
  cors({
    origin: ["https://hris-project-1.onrender.com", "http://localhost:5173"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Referrer-Policy"],
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




mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB");
  })
app.listen(process.env.PORT)
