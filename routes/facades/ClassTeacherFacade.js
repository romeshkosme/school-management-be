const FactoryService = require("../services/FactoryService");
const factoryService = FactoryService();

class ClassTeacherFacade {
  create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const classTeacherService = factoryService.get("classTeacher");
        const classTeacher = classTeacherService.insert(data);
        resolve({
          success: true,
          classTeacher,
        });
      } catch (error) {
        console.log(error);
        reject({
          success: false,
          error: error.message,
        });
      }
    });
  }
  get(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const classTeacherService = factoryService.get("classTeacher");
        const classTeacher = classTeacherService.get(data);
        resolve({
          success: true,
          classTeacher,
        });
      } catch (error) {
        console.log(error);
        reject({
          success: false,
          error: error.message,
        });
      }
    });
  }
}

module.exports = ClassTeacherFacade;