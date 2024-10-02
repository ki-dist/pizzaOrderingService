const RestaurantService = require('../service/RestaurantService'); 
const ResponseDTO = require('../dto/response/ResponseDto'); 

class RestaurantController {
    async createRestaurant(req, res) {
        try {
            const response = await RestaurantService.createRestaurant(req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getAllRestaurants(req, res) {
        try {
            const response = await RestaurantService.getAllRestaurants();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getRestaurantById(req, res) {
        try {
            const response = await RestaurantService.getRestaurantById(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async updateRestaurant(req, res) {
        try {
            const response = await RestaurantService.updateRestaurant(req.params.id, req.body);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async deleteRestaurant(req, res) {
        try {
            const response = await RestaurantService.deleteRestaurant(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new RestaurantController();
