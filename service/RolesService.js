const Roles = require('../model/Roles'); 
const ResponseDTO = require('../dto/response/ResponseDto');

class RolesService {
    async createRole(roleData) {
        try {
            const role = await Roles.create(roleData);
            return new ResponseDTO('success', 'Role created successfully', role);
        } catch (error) {
            console.error('Error creating role:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    async getAllRoles() {
        try {
            const roles = await Roles.findAll();
            return new ResponseDTO('success', 'Roles retrieved successfully', roles);
        } catch (error) {
            console.error('Error retrieving roles:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    async getRoleById(id) {
        try {
            const role = await Roles.findByPk(id);
            if (!role) {
                return new ResponseDTO('error', 'Role not found');
            }
            return new ResponseDTO('success', 'Role retrieved successfully', role);
        } catch (error) {
            console.error('Error retrieving role:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    async updateRole(id, roleData) {
        try {
            const [updated] = await Roles.update(roleData, { where: { id } });
            if (!updated) {
                return new ResponseDTO('error', 'Role not found or no changes made');
            }
            const updatedRole = await Roles.findByPk(id);
            return new ResponseDTO('success', 'Role updated successfully', updatedRole);
        } catch (error) {
            console.error('Error updating role:', error);
            throw new ResponseDTO('error', error.message);
        }
    }

    async deleteRole(id) {
        try {
            const deleted = await Roles.destroy({ where: { id } });
            if (!deleted) {
                return new ResponseDTO('error', 'Role not found');
            }
            return new ResponseDTO('success', 'Role deleted successfully');
        } catch (error) {
            console.error('Error deleting role:', error);
            throw new ResponseDTO('error', error.message);
        }
    }
}

module.exports = new RolesService();
