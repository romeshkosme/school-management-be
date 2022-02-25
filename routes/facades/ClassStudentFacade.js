const FactoryService = require("../services/FactoryService");
const factoryService = FactoryService();

class ClassStudentFacade {
  create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const classStudentService = factoryService.get("classStudent");
        const classStudent = classStudentService.insert(data);
        resolve({
          success: true,
          classStudent,
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
        const classStudentService = factoryService.get("classStudent");
        const classStudent = classStudentService.get(data);
        resolve({
          success: true,
          classStudent,
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

module.exports = ClassStudentFacade;