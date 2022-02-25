const ClassStudentModel = require("../models/ClassStudentModel");
const Service = require("./Service");

class ClassStudentService extends Service {
  constructor() {
    super(ClassStudentModel);
  }
}

module.exports = ClassStudentService;
