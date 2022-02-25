const TeacherService = require("../services/TeacherService");
const AddressService = require("../services/AddressService");

class TeacherFacade {
  create(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const teacherService = new TeacherService();
        await teacherService.create(payload);
        resolve({
          success: true,
          message: "Teacher created successfully",
        });
      } catch (error) {
        console.log(error);
        reject({
          success: false,
          message: error.message,
        });
      }
    });
  }
  getAll(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const teacherService = new TeacherService();
        const teachers = await teacherService.getAll(payload);
        resolve({
          success: true,
          teachers,
        });
      } catch (error) {
        console.log(error);
        reject({
          success: false,
          message: error.message,
        });
      }
    });
  }
  get(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const teacherService = new TeacherService();
        const teacher = await teacherService.get(payload);
        resolve({
          success: true,
          teacher,
        });
      } catch (error) {
        console.log(error);
        reject({
          success: false,
          message: error.message,
        });
      }
    });
  }

  update(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const teacherService = new TeacherService();
        await teacherService.update(payload);
        resolve({
          success: true,
          message: "Teacher updated successfully",
        });
      } catch (error) {
        console.log(error);
        reject({
          success: false,
          message: error.message,
        });
      }
    });
  }
}

module.exports = TeacherFacade;
