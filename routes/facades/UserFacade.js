const UserService = require("../services/UserService");
const AddressService = require("../services/AddressService");
const StudentService = require("../services/StudentService");
const TeacherService = require("../services/TeacherService");
const AdminService = require("../services/AdminService");

class UserFacade {
  create(data) {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(data.body);
        const addressService = new AddressService();
        const address = await addressService.insert(data.body.address);
        const userService = new UserService();
        const userData = {
          address: address._id,
          ...data.body.user,
        };
        const user = await userService.insert(userData);
        if (user.role === "student") {
          const studentData = {
            user: user._id,
            ...data.body.student,
          };
          const studentService = new StudentService();
          await studentService.insert(studentData);
        } else if (user.role === "teacher") {
          const teacherData = {
            user: user._id,
            ...data.body.teacher,
          };
          const teacherService = new TeacherService();
          await teacherService.insert(teacherData);
        } else if (user.role === "admin") {
          const adminData = {
            user: user._id,
            ...data.body.admin,
          };
          const adminService = new AdminService();
          await adminService.insert(adminData);
        }
        resolve({
          success: true,
          message: "User created",
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
        const userService = new UserService();
        const user = await userService.get({ _id: data.body.id });
        const response = { ...user._doc };
        if (user && user.role === "student") {
          const studentService = new StudentService();
          const student = await studentService.get({ user: user._id });
          response["student"] = student;
        } else if (user && user.role === "teacher") {
          const teacherService = new TeacherService();
          const teacher = await teacherService.get({ user: user._id });
          response["teacher"] = teacher;
        } else if (user && user.role === "admin") {
          const adminService = new AdminService();
          const admin = await adminService.get({ user: user._id });
          response["admin"] = admin;
        }
        resolve({
          success: true,
          message: "User fetched",
          user: response,
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
module.exports = UserFacade;
