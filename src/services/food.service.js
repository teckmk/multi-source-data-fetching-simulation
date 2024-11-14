const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

class FoodService {
  async getFoodList() {
    await delay(115);
    return {
      foods: [
        {
          id: 1,
          name: "Fish Curry",
          description: "Traditional Goan fish curry with coconut base",
          price: 250,
          cuisine: "Goan",
        },
        {
          id: 2,
          name: "Vindaloo",
          description: "Spicy curry with meat and potatoes",
          price: 300,
          cuisine: "Goan",
        },
      ],
    };
  }

  async getFoodLocations() {
    await delay(120000); // 2 minutes
    return {
      locations: [
        {
          id: 1,
          area: "Panaji",
          restaurants: ["Beach Shack", "Spice Garden"],
        },
        {
          id: 2,
          area: "Calangute",
          restaurants: ["Sea View", "Coastal Kitchen"],
        },
      ],
    };
  }

  async getNutritionalInfo() {
    await delay(300);
    return {
      nutritionalInfo: {
        1: {
          calories: 250,
          protein: "15g",
          carbs: "20g",
          fat: "12g",
        },
        2: {
          calories: 350,
          protein: "25g",
          carbs: "30g",
          fat: "18g",
        },
      },
    };
  }

  async getStockOutFoods() {
    await delay(100);
    return {
      stockOut: [
        {
          id: 3,
          name: "Xacuti",
          expectedDate: "2024-11-15",
        },
      ],
    };
  }

  mergeData(foodList, locations, nutritionalInfo, stockOut) {
    return {
      status: "success",
      timestamp: new Date().toISOString(),
      data: {
        availableFoods: foodList.foods.map((food) => ({
          ...food,
          nutritionalInfo: nutritionalInfo.nutritionalInfo[food.id],
          availableLocations: locations.locations.map((loc) => ({
            area: loc.area,
            restaurants: loc.restaurants,
          })),
        })),
        stockOutFoods: stockOut.stockOut,
      },
    };
  }

  async getAllFoodData() {
    try {
      const [foodList, locations, nutritionalInfo, stockOut] =
        await Promise.all([
          this.getFoodList(),
          this.getFoodLocations(),
          this.getNutritionalInfo(),
          this.getStockOutFoods(),
        ]);

      return this.mergeData(foodList, locations, nutritionalInfo, stockOut);
    } catch (error) {
      throw new Error(`Failed to fetch food data: ${error.message}`);
    }
  }
}

module.exports = new FoodService();
