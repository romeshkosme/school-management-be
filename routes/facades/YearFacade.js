const FactoryService = require("../services/FactoryService");
const factoryService = new FactoryService();
class YearFacade {
  create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const yearService = factoryService("year");
        await yearService.insert(data.body);
        resolve({
          success: true,
          message: "Year created",
        });
      } catch (error) {
        reject({
          success: false,
          message: error.message,
        });
      }
    });
  }
  get(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const yearService = factoryService("year");
        const year = await yearService.get({ _id: data.body.id });
        resolve({
          success: true,
          message: "Year fetched",
          year,
        });
      } catch (error) {
        reject({
          success: false,
          message: error.message,
        });
      }
    });
  }
  getAll(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const yearService = factoryService("year");
        const years = await yearService.getAll();
        resolve({
          success: true,
          message: "Years fetched",
          years: years,
        });
      } catch (error) {
        reject({
          success: false,
          message: error.message,
        });
      }
    });
  }
}

module.exports = YearFacade;
