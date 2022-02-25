const FactoryService = require("../services/FactoryService");
const factoryService = FactoryService();

class ClassSectionFacade {
  create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const classSectionService = factoryService.get("classSection");
        const classSection = classSectionService.insert(data);
        resolve({
          success: true,
          classSection,
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
        const classSectionService = factoryService.get("classSection");
        const classSection = classSectionService.get(data);
        resolve({
          success: true,
          classSection,
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

module.exports = ClassSectionFacade;
