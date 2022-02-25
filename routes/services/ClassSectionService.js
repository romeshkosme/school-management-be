const ClassSectionModel = require("../models/ClassSectionModel");
const Service = require("./Service");

class ClassSectionService extends Service {
  constructor() {
    super(ClassSectionModel);
  }
  get(query) {
    return new Promise(async (resolve, reject) => {
      const classSection = await this.model.findOne(query).populate("class");
      resolve(classSection);
    });
  }
}

module.exports = ClassSectionService;
