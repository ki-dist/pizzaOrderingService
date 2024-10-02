const AddressService = require('../service/AddressService');

class AddressController {
  async createAddress(req, res) {
    try {
      const address = await AddressService.createAddress(req.body);
      res.status(201).json({ status: 'success', data: address });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

  async getAllAddresses(req, res) {
    try {
      const addresses = await AddressService.getAllAddresses();
      res.status(200).json({ status: 'success', data: addresses });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

  async getAddressById(req, res) {
    try {
      const address = await AddressService.getAddressById(req.params.id);
      if (!address) {
        return res.status(404).json({ status: 'error', message: 'Address not found' });
      }
      res.status(200).json({ status: 'success', data: address });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

  async updateAddress(req, res) {
    try {
      const address = await AddressService.updateAddress(req.params.id, req.body);
      if (!address) {
        return res.status(404).json({ status: 'error', message: 'Address not found' });
      }
      res.status(200).json({ status: 'success', data: address });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }

  async deleteAddress(req, res) {
    try {
      const deleted = await AddressService.deleteAddress(req.params.id);
      if (!deleted) {
        return res.status(404).json({ status: 'error', message: 'Address not found' });
      }
      res.status(204).json({ status: 'success' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error.message });
    }
  }
}

module.exports = new AddressController();
