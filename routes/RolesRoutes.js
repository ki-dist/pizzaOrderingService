const express = require('express');
const RolesController = require('../controller/RolesController');


    const router = express.Router();

router.post('/create', RolesController.createRole);
router.get('/', RolesController.getAllRoles);
router.get('/:id', RolesController.getRoleById);
router.put('/:id', RolesController.updateRole);
router.delete('/:id', RolesController.deleteRole);

module.exports = router;

