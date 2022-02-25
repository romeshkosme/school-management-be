const AdminFacade = require("./AdminFacade");
const UserFacade = require("./UserFacade");
const StudentFacade = require("./StudentFacade");
const TeacherFacade = require("./TeacherFacade");
const ClassFacade = require("./ClassFacade");
const ClassSectionFacade = require("./ClassSectionFacade");
const ClassYearFacade = require("./ClassYearFacade");
const ClassTeacherFacade = require("./ClassTeacherFacade");
const ClassStudentFacade = require("./ClassStudentFacade");

class FactoryFacade {
  get(type) {
    switch (type) {
      case "admin":
        return new AdminFacade();
      case "user":
        return new UserFacade();
      case "student":
        return new StudentFacade();
      case "teacher":
        return new TeacherFacade();
      case "class":
        return new ClassFacade();
      case "classSection":
        return new ClassSectionFacade();
      case "classYear":
        return new ClassYearFacade();
      case "classStudent":
        return new ClassStudentFacade();
      case "classTeacher":
        return new ClassTeacherFacade();
      default:
        return false;
    }
  }
}

module.exports = FactoryFacade;
