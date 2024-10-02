const express = require('express');
const MenuController = require('../controller/MenuController'); 


const router = express.Router();

router.post('/create',  MenuController.createMenu);
router.get('/', MenuController.getAllMenus);
router.get('/:id', MenuController.getMenuById);
router.put('/:id', MenuController.updateMenu);
router.delete('/:id', MenuController.deleteMenu);

module.exports = router;