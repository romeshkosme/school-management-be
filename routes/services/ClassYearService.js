const ClassYearModel = require("../models/ClassYearModel");
const Service = require("./Service");

class ClassYearService extends Service {
  constructor() {
    super(ClassYearModel);
  }
}

module.exports = ClassYearService;
