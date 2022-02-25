const Service = require("./Service");
const AddressModel = require("../models/AddressModel");

class AddressService extends Service {
  constructor() {
    super(AddressModel);
  }
}

module.exports = AddressService;
