const foodService = require("../services/food.service");

class FoodController {
  async getFoodData(req, res, next) {
    try {
      const foodData = await foodService.getAllFoodData();
      res.json(foodData);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new FoodController();
