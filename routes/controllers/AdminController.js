const AdminFacade = require("../facades/AdminFacade");

function AdminController() {
  this.adminFacade = new AdminFacade();
  this.create = function (req, res) {
    this.adminFacade
      .create(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
  this.getAll = function (req, res) {
    this.adminFacade
      .getAll(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
  this.get = function (req, res) {
    this.adminFacade
      .get(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
  this.update = function (req, res) {
    this.adminFacade
      .update(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  };
}
const adminController = new AdminController();
module.exports = adminController;
