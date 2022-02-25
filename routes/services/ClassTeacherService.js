const ClassTeacherModel = require("../models/ClassTeacherModel");
const Service = require("./Service");

class ClassTeacherService extends Service {
  constructor() {
    super(ClassTeacherModel);
  }
}

module.exports = ClassTeacherService;
