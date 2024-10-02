const Paths = require('../model/Paths'); 
const ResponseDTO = require('../dto/response/ResponseDto');

class PathsService {
    // Create a new path
    async createPath(pathData) {
        try {
            const path = await Paths.create(pathData);
            return new ResponseDTO('success', 'Path created successfully', path);
        } catch (error) {
            console.error('Error creating path:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Get all paths
    async getAllPaths() {
        try {
            const paths = await Paths.findAll();
            return new ResponseDTO('success', 'Paths retrieved successfully', paths);
        } catch (error) {
            console.error('Error retrieving paths:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Get a path by ID
    async getPathById(id) {
        try {
            const path = await Paths.findByPk(id);
            if (!path) {
                return new ResponseDTO('error', 'Path not found');
            }
            return new ResponseDTO('success', 'Path retrieved successfully', path);
        } catch (error) {
            console.error('Error retrieving path:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Update a path by ID
    async updatePath(id, pathData) {
        try {
            const [updated] = await Paths.update(pathData, { where: { id } });
            if (!updated) {
                return new ResponseDTO('error', 'Path not found or no changes made');
            }
            const updatedPath = await Paths.findByPk(id);
            return new ResponseDTO('success', 'Path updated successfully', updatedPath);
        } catch (error) {
            console.error('Error updating path:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    // Delete a path by ID
    async deletePath(id) {
        try {
            const deleted = await Paths.destroy({ where: { id } });
            if (!deleted) {
                return new ResponseDTO('error', 'Path not found');
            }
            return new ResponseDTO('success', 'Path deleted successfully');
        } catch (error) {
            console.error('Error deleting path:', error);
            throw new ResponseDTO('error', error.message);
        }
    }
}

module.exports = new PathsService();
