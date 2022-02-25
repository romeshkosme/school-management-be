const Service = require("./Service");
const AttendanceModel = require("../models/AttendanceModel");

class AttendanceService extends Service {
  constructor() {
    super(AttendanceModel);
  }
}

module.exports = AttendanceService;
