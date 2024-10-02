const express = require('express');
const RestaurantController = require('../controller/RestaurantController'); 


const router = express.Router();

router.post('/create', RestaurantController.createRestaurant);
router.get('/',RestaurantController.getAllRestaurants);
router.get('/:id', RestaurantController.getRestaurantById);
router.put('/:id',  RestaurantController.updateRestaurant);
router.delete('/:id', RestaurantController.deleteRestaurant);

module.exports = router;