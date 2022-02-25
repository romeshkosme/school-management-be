const Service = require("./Service");
const UserModel = require("../models/UserModel");

class UserService extends Service {
  constructor() {
    super(UserModel);
  }
  get(query) {
    return new Promise(async (resolve, reject) => {
      const user = await this.model.findOne(query).populate("address");
      resolve(user);
    });
  }
}

module.exports = UserService;
