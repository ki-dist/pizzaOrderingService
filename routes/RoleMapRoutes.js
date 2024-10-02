const express = require('express');
const RoleMapController = require('../controller/RoleMapController');

const router = express.Router();

router.post('/', RoleMapController.createRoleMap);
router.get('/', RoleMapController.getAllRoleMaps);
router.get('/:id', RoleMapController.getRoleMapById);
router.put('/:id', RoleMapController.updateRoleMap);
router.delete('/:id', RoleMapController.deleteRoleMap);

module.exports = router;
