const MenuService = require('../service/MenuService'); 
const ResponseDTO = require('../dto/response/ResponseDto');

class MenuController {
    async createMenu(req, res) {
        try {
            const response = await MenuService.createMenu(req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getAllMenus(req, res) {
        try {
            const response = await MenuService.getAllMenus();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getMenuById(req, res) {
        try {
            const response = await MenuService.getMenuById(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async updateMenu(req, res) {
        try {
            const response = await MenuService.updateMenu(req.params.id, req.body);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async deleteMenu(req, res) {
        try {
            const response = await MenuService.deleteMenu(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new MenuController();
