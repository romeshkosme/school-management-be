const StudentService = require("../services/StudentService");
const AddressService = require("../services/AddressService");

class StudentFacade {
  create(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const studentService = new StudentService();
        await studentService.create(payload);
        resolve({
          success: true,
          message: "Student created successfully",
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
  getAll(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const query = data.body;
        const studentService = new StudentService();
        const students = await studentService.getAll(query);
        resolve({
          success: true,
          message: "Students fetched successfully",
          students,
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
  get(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const query = data.body;
        const studentService = new StudentService();
        const student = await studentService.get(query);
        resolve({
          success: true,
          message: "Student fetched successfully",
          student,
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
        const studentService = new StudentService();
        await studentService.update(payload);
        resolve({
          success: true,
          message: "Student updated successfully",
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

module.exports = StudentFacade;
