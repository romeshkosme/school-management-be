const FactoryService = require("../services/FactoryService");
const factoryService = FactoryService();

class ClassYearFacade {
  create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const classYearService = factoryService.get("classYear");
        const classYear = classYearService.insert(data);
        resolve({
          success: true,
          classYear,
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
        const classYearService = factoryService.get("classYear");
        const classYear = classYearService.get(data);
        resolve({
          success: true,
          classYear,
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

module.exports = ClassYearFacade;