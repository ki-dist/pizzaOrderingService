const PathsService = require('../service/PathsService'); 
const ResponseDTO = require('../dto/response/ResponseDto'); 
class PathsController {
    async createPath(req, res) {
        try {
            const response = await PathsService.createPath(req.body);
            return res.status(201).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getAllPaths(req, res) {
        try {
            const response = await PathsService.getAllPaths();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async getPathById(req, res) {
        try {
            const response = await PathsService.getPathById(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async updatePath(req, res) {
        try {
            const response = await PathsService.updatePath(req.params.id, req.body);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    async deletePath(req, res) {
        try {
            const response = await PathsService.deletePath(req.params.id);
            return res.status(200).json(response);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = new PathsController();
