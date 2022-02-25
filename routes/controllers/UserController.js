const UserFacade = require("../facades/UserFacade");

class UserController {
  constructor() {
    this.userFacade = new UserFacade();
    this.create = this.create.bind(this);
  }

  create(req, res) {
    this.userFacade
      .create(req)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
  get(req, res) {
    this.userFacade
      .get(req)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
}
const userController = new UserController();
module.exports = userController;