const RoleMap = require('../model/RoleMap');

class RoleMapService {
  async createRoleMap(data) {
    return await RoleMap.create(data);
  }

  async getAllRoleMaps() {
    return await RoleMap.findAll();
  }

  async getRoleMapById(id) {
    return await RoleMap.findByPk(id);
  }

  async updateRoleMap(id, data) {
    await RoleMap.update(data, { where: { id } });
    return this.getRoleMapById(id);
  }

  async deleteRoleMap(id) {
    return await RoleMap.destroy({ where: { id } });
  }
}

module.exports = new RoleMapService();
