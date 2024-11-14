require("dotenv").config();

const express = require("express");
const foodRoutes = require("./routes/food.routes");
const ErrorHandler = require("./middleware/error.handler");

const app = express();

// Routes
app.use("/api", foodRoutes);

// Error handling
app.use(ErrorHandler.handle);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
