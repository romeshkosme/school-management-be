const Service = require("./Service");
const UserRole = require("../models/UserRole");

class UserRoleService extends Service {
  constructor() {
    super(UserRole);
  }
}

module.exports = UserRoleService;
