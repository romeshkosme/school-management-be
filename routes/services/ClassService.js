const ClassModel = require("../models/ClassModel");
const Service = require("./Service");

class ClassService extends Service {
  constructor() {
    super(ClassModel);
  }
  getClassesMapTeacher(query) {
    return new Promise(async (resolve, reject) => {
      try {
        const classModel = await this.model.find(query).populate("teacher");
        resolve(classModel);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = ClassService;
