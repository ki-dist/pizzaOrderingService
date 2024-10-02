const OrdersService = require('../service/OrdersService'); 
const ResponseDTO = require('../dto/response/ResponseDto'); 
class OrdersController {
    async createOrder(req, res) {
        try {
            const response = await OrdersService.createOrder(req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getAllOrders(req, res) {
        try {
            const response = await OrdersService.getAllOrders();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getOrderById(req, res) {
        try {
            const response = await OrdersService.getOrderById(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async updateOrder(req, res) {
        try {
            const response = await OrdersService.updateOrder(req.params.id, req.body);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async deleteOrder(req, res) {
        try {
            const response = await OrdersService.deleteOrder(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new OrdersController();
