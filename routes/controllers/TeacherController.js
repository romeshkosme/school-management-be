const TeacherFacade = require("../facades/TeacherFacade");

function TeacherController() {
  this.teacherFacade = new TeacherFacade();
  this.create = function (req, res) {
    this.teacherFacade
      .create(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
  this.getAll = function (req, res) {
    this.teacherFacade
      .getAll(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
  this.get = function (req, res) {
    this.teacherFacade
      .get(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
  this.update = function (req, res) {
    this.teacherFacade
      .update(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
}

const teacherController = new TeacherController();
module.exports = teacherController;
