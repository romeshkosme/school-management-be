const ClassService = require("../services/ClassService");

class ClassFacade {
  create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const classService = new ClassService();
        await classService.insert(data);
        resolve({
          success: true,
          message: "Class created successfully",
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
        const query = data.body;
        const classService = new ClassService();
        const classes = await classService.getAll(query);
        resolve({
          success: true,
          classes,
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
        const query = data.body;
        const classService = new ClassService();
        const classModel = await classService.get(query);
        resolve({
          success: true,
          data: classModel,
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

module.exports = ClassFacade;
