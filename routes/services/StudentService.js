const Service = require("./Service");
const StudentModel = require("../models/StudentModel");

class StudentService extends Service {
  constructor() {
    super(StudentModel);
  }
  getAll(query) {
    return new Promise(async (resolve, reject) => {
      const students = await this.model.find(query).populate("user");
      resolve(students);
    });
  }
}

module.exports = StudentService;
