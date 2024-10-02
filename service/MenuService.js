const Menu = require('../model/Menu'); 
// const Address = require('../model/Address'); 
const ResponseDTO = require('../dto/response/ResponseDto'); 
const { sequelize } = require('../config/database'); 


class MenuService {
    // Create a new menu item
    async createMenu(menuData) {
        try {
            const menu = await Menu.create(menuData);
            return new ResponseDTO('success', 'Menu created successfully', menu);
        } catch (error) {
            console.error('Error creating menu:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Get all menu items
    async getAllMenus() {
        try {
            const menus = await Menu.findAll();
            return new ResponseDTO('success', 'Menus retrieved successfully', menus);
        } catch (error) {
            console.error('Error retrieving menus:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Get a menu item by ID
    async getMenuById(id) {
        try {
            const menu = await Menu.findByPk(id);
            if (!menu) {
                return new ResponseDTO('error', 'Menu not found');
            }
            return new ResponseDTO('success', 'Menu retrieved successfully', menu);
        } catch (error) {
            console.error('Error retrieving menu:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Update a menu item by ID
    async updateMenu(id, menuData) {
        try {
            const [updated] = await Menu.update(menuData, { where: { id } });
            if (!updated) {
                return new ResponseDTO('error', 'Menu not found or no changes made');
            }
            const updatedMenu = await Menu.findByPk(id);
            return new ResponseDTO('success', 'Menu updated successfully', updatedMenu);
        } catch (error) {
            console.error('Error updating menu:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Delete a menu item by ID
    async deleteMenu(id) {
        try {
            const deleted = await Menu.destroy({ where: { id } });
            if (!deleted) {
                return new ResponseDTO('error', 'Menu not found');
            }
            return new ResponseDTO('success', 'Menu deleted successfully');
        } catch (error) {
            console.error('Error deleting menu:', error);
            throw new ResponseDTO('error', error.message);
        }
    }
    async  findByName  (title) {
        try {
            const menu = await Menu.findOne({ where: { title } }); 
            if (!menu) {
                return new ResponseDTO('error', 'User not found');
            }
            return new ResponseDTO('success', 'User found', user);
        } catch (error) {
            console.error('Error finding user by username:', error);
            throw new ResponseDTO('error', 'Internal server error');
        }
      };
}

module.exports = new MenuService();

