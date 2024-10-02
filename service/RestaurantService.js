const Restaurant = require('../model/Restaurant'); 
const ResponseDTO = require('../dto/response/ResponseDto'); 

class RestaurantService {
    // Create a new restaurant
    async createRestaurant(restaurantData) {
        try {
            const restaurant = await Restaurant.create(restaurantData);
            return new ResponseDTO('success', 'Restaurant created successfully', restaurant);
        } catch (error) {
            console.error('Error creating restaurant:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Get all restaurants
    async getAllRestaurants() {
        try {
            const restaurants = await Restaurant.findAll();
            return new ResponseDTO('success', 'Restaurants retrieved successfully', restaurants);
        } catch (error) {
            console.error('Error retrieving restaurants:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Get a restaurant by ID
    async getRestaurantById(id) {
        try {
            const restaurant = await Restaurant.findByPk(id);
            if (!restaurant) {
                return new ResponseDTO('error', 'Restaurant not found');
            }
            return new ResponseDTO('success', 'Restaurant retrieved successfully', restaurant);
        } catch (error) {
            console.error('Error retrieving restaurant:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Update a restaurant by ID
    async updateRestaurant(id, restaurantData) {
        try {
            const [updated] = await Restaurant.update(restaurantData, { where: { id } });
            if (!updated) {
                return new ResponseDTO('error', 'Restaurant not found or no changes made');
            }
            const updatedRestaurant = await Restaurant.findByPk(id);
            return new ResponseDTO('success', 'Restaurant updated successfully', updatedRestaurant);
        } catch (error) {
            console.error('Error updating restaurant:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Delete a restaurant by ID
    async deleteRestaurant(id) {
        try {
            const deleted = await Restaurant.destroy({ where: { id } });
            if (!deleted) {
                return new ResponseDTO('error', 'Restaurant not found');
            }
            return new ResponseDTO('success', 'Restaurant deleted successfully');
        } catch (error) {
            console.error('Error deleting restaurant:', error);
            throw new ResponseDTO('error', error.message);
        }
    }
}

module.exports = new RestaurantService();
