const Service = require("./Service");
const AdminModel = require("../models/AdminModel");

class AdminService extends Service {
  constructor() {
    super(AdminModel);
  }
  getAll(query) {
    return new Promise(async (resolve, reject) => {
      resolve(this.model.find(query).populate("user"));
    });
  }
  get(query) {
    return new Promise(async (resolve, reject) => {
      resolve(this.model.findOne(query).populate("user"));
    });
  }
}

module.exports = AdminService;
