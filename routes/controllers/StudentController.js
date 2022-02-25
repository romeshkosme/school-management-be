const StudentFacade = require("../facades/StudentFacade");

function StudentController() {
  this.studentFacade = new StudentFacade();
  this.create = function (req, res) {
    this.studentFacade
      .create(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
  this.getAll = function (req, res) {
    this.studentFacade
      .getAll(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
  this.get = function (req, res) {
    this.studentFacade
      .get(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
  this.update = function (req, res) {
    this.studentFacade
      .update(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
}

const studentController = new StudentController();
module.exports = studentController;
