const express = require('express');
const PathsController = require('../controller/PathsController'); 

const router = express.Router();

router.post('/create',  PathsController.createPath);
router.get('/', PathsController.getAllPaths);
router.get('/:id', PathsController.getPathById);
router.put('/:id', PathsController.updatePath);
router.delete('/:id',  PathsController.deletePath);

module.exports = router;