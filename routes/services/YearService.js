const Service = require("./Service");
const YearModel = require("../models/YearModel");

class YearService extends Service {
  constructor() {
    super(YearModel);
  }
}

module.exports = YearService;
