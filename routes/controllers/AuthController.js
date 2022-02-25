const AuthFacade = require("../facades/AuthFacade");

class AuthController {
  constructor() {
    this.authFacade = new AuthFacade();
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  register(req, res) {
    this.authFacade
      .register(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  }

  login(req, res) {
    this.authFacade
      .login(req)
      .then((data) => res.json(data))
      .catch((err) => res.status(err.code).json(err.response));
  }
}
const authController = new AuthController();
module.exports = authController;
