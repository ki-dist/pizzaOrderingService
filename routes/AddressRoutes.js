const express = require('express');
const AddressController = require('../controller/AddressController');

const router = express.Router();

router.post('/', AddressController.createAddress);
router.get('/', AddressController.getAllAddresses);
router.get('/:id', AddressController.getAddressById);
router.put('/:id', AddressController.updateAddress);
router.delete('/:id', AddressController.deleteAddress);

module.exports = router;
