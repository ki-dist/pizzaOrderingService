const RolesService = require('../service/RolesService'); 
const ResponseDTO = require('../dto/response/ResponseDto'); 

class RolesController {
    async createRole(req, res) {
        try {
            const response = await RolesService.createRole(req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getAllRoles(req, res) {
        try {
            const response = await RolesService.getAllRoles();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getRoleById(req, res) {
        try {
            const response = await RolesService.getRoleById(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async updateRole(req, res) {
        try {
            const response = await RolesService.updateRole(req.params.id, req.body);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async deleteRole(req, res) {
        try {
            const response = await RolesService.deleteRole(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new RolesController();
