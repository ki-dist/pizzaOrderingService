const express = require('express');
const OrdersController = require('../controller/OrderController'); 

const router = express.Router();

router.post('/create', OrdersController.createOrder);
router.get('/', OrdersController.getAllOrders);
router.get('/:id', OrdersController.getOrderById);
router.put('/:id', OrdersController.updateOrder);
router.delete('/:id', OrdersController.deleteOrder);

module.exports = router;