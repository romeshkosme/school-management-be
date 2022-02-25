const UserService = require("../services/UserService");
const bcrypt = require("bcrypt");
const admin = require("../config/firebase-config");

class AuthFacade {
  constructor() {
    this.register = this.register.bind(this);
  }

  register({ body }) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = body;
        data.email = data.email.toLowerCase();
        const userService = new UserService();
        // check user
        const userExist = await userService.get({ email: data.email });
        if (userExist) {
          resolve({
            success: false,
            response: { message: "User already registered." },
          });
          return;
        }
        const hash = bcrypt.hashSync(data.password, 10);
        data.password = hash;
        const user = await userService.insert(data);
        if (user) {
          resolve({
            success: true,
            response: { user },
          });
        }
      } catch (error) {
        console.log(error);
        reject({
          success: false,
          error,
        });
      }
    });
  }

  login({ body }) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = body;
        console.log(data)
        const email = data.email.toLowerCase();
        const userService = new UserService();
        const user = await userService.get({ email });
        if (user) {
          console.log(user.password)
          console.log(data.password)
          const passwordValid = bcrypt.compareSync(
            data.password,
            user.password
          );
          if (passwordValid) {
            const accessToken = await admin
              .auth()
              .createCustomToken(user.email);
            console.log(accessToken);
            resolve({
              success: true,
              response: { accessToken },
            });
          } else {
            resolve({
              success: false,
              response: { message: "Incorrect Password!" },
            });
          }
        } else {
          resolve({
            success: false,
            response: { message: "Email not registered." },
          });
        }
      } catch (error) {
        console.log(error);
        reject({
          success: false,
          response: { error },
        });
      }
    });
  }
}

module.exports = AuthFacade;
