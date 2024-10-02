const RoleMapService = require('../service/RoleMapService');

class RoleMapController {
  async createRoleMap(req, res) {
    try {
      const roleMap = await RoleMapService.createRoleMap(req.body);
      res.status(201).json({ status: 'success', data: roleMap });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

  async getAllRoleMaps(req, res) {
    try {
      const roleMaps = await RoleMapService.getAllRoleMaps();
      res.status(200).json({ status: 'success', data: roleMaps });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

  async getRoleMapById(req, res) {
    try {
      const roleMap = await RoleMapService.getRoleMapById(req.params.id);
      if (!roleMap) {
        return res.status(404).json({ status: 'error', message: 'RoleMap not found' });
      }
      res.status(200).json({ status: 'success', data: roleMap });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

  async updateRoleMap(req, res) {
    try {
      const roleMap = await RoleMapService.updateRoleMap(req.params.id, req.body);
      if (!roleMap) {
        return res.status(404).json({ status: 'error', message: 'RoleMap not found' });
      }
      res.status(200).json({ status: 'success', data: roleMap });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

  async deleteRoleMap(req, res) {
    try {
      const deleted = await RoleMapService.deleteRoleMap(req.params.id);
      if (!deleted) {
        return res.status(404).json({ status: 'error', message: 'RoleMap not found' });
      }
      res.status(204).json({ status: 'success' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }
}

module.exports = new RoleMapController();
