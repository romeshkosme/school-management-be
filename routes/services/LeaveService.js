const Service = require("./Service");
const LeaveModel = require("../models/LeaveModel");

class LeaveService extends Service {
  constructor() {
    super(LeaveModel);
  }
}

module.exports = LeaveService;
