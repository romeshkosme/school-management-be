const AdminService = require("./AdminService");
const UserService = require("./UserService");
const StudentService = require("./StudentService");
const TeacherService = require("./TeacherService");
const ClassService = require("./ClassService");
const ClassSectionService = require("./ClassSectionService");
const ClassYearService = require("./ClassYearService");
const ClassStudentService = require("./ClassStudentService");
const ClassTeacherService = require("./ClassTeacherService");
const YearService = require("./YearService");

class FactoryService {
  get(type) {
    switch (type) {
      case "admin":
        return new AdminService();
      case "user":
        return new UserService();
      case "student":
        return new StudentService();
      case "teacher":
        return new TeacherService();
      case "class":
        return new ClassService();
      case "classSection":
        return new ClassSectionService();
      case "classYear":
        return new ClassYearService();
      case "classStudent":
        return new ClassStudentService();
      case "classTeacher":
        return new ClassTeacherService();
      case "year":
        return new YearService();
      default:
        return false;
    }
  }
}

module.exports = FactoryService;
