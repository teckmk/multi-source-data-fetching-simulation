const express = require("express");
const router = express.Router();
const foodController = require("../controllers/food.controller");

router.get("/goa", foodController.getFoodData.bind(foodController));

module.exports = router;
