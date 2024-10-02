const Orders = require('../model/Orders'); 
const ResponseDTO = require('../dto/response/ResponseDto');
class OrdersService {
    // Create a new order
    async createOrder(orderData) {
        try {
            const order = await Orders.create(orderData);
            return new ResponseDTO('success', 'Order created successfully', order);
        } catch (error) {
            console.error('Error creating order:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Get all orders
    async getAllOrders() {
        try {
            const orders = await Orders.findAll();
            return new ResponseDTO('success', 'Orders retrieved successfully', orders);
        } catch (error) {
            console.error('Error retrieving orders:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Get an order by ID
    async getOrderById(id) {
        try {
            const order = await Orders.findByPk(id);
            if (!order) {
                return new ResponseDTO('error', 'Order not found');
            }
            return new ResponseDTO('success', 'Order retrieved successfully', order);
        } catch (error) {
            console.error('Error retrieving order:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Update an order by ID
    async updateOrder(id, orderData) {
        try {
            const [updated] = await Orders.update(orderData, { where: { id } });
            if (!updated) {
                return new ResponseDTO('error', 'Order not found or no changes made');
            }
            const updatedOrder = await Orders.findByPk(id);
            return new ResponseDTO('success', 'Order updated successfully', updatedOrder);
        } catch (error) {
            console.error('Error updating order:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Delete an order by ID
    async deleteOrder(id) {
        try {
            const deleted = await Orders.destroy({ where: { id } });
            if (!deleted) {
                return new ResponseDTO('error', 'Order not found');
            }
            return new ResponseDTO('success', 'Order deleted successfully');
        } catch (error) {
            console.error('Error deleting order:', error);
            throw new ResponseDTO('error', error.message);
        }
    }
}

module.exports = new OrdersService();
