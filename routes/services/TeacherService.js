const Service = require("./Service");
const TeacherModel = require("../models/TeacherModel");

class TeacherService extends Service {
  constructor() {
    super(TeacherModel);
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

module.exports = TeacherService;
