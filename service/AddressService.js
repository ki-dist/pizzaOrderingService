const Address = require('../model/Address');

class AddressService {
  async createAddress(data) {
    return await Address.create(data);
  }

  async getAllAddresses() {
    return await Address.findAll();
  }

  async getAddressById(id) {
    return await Address.findByPk(id);
  }

  async updateAddress(id, data) {
    await Address.update(data, { where: { id } });
    return this.getAddressById(id);
  }

  async deleteAddress(id) {
    return await Address.destroy({ where: { id } });
  }
}

module.exports = new AddressService();
