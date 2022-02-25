const AdminService = require("../services/AdminService");
const AddressService = require("../services/AddressService");

class AdminFacade {
  create(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const adminService = new AdminService();
        await adminService.create(payload);
        resolve({
          success: true,
          message: "Admin created successfully",
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
  getAll(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const adminService = new AdminService();
        const admins = await adminService.getAll(payload);
        resolve({
          success: true,
          admins,
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
  get(payload) {
    return new Promise(async (resolve, reject) => {
      try {
        const adminService = new AdminService();
        const admin = await adminService.get(payload);
        resolve({
          success: true,
          message: "Admin found successfully",
          admin,
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
        const adminService = new AdminService();
        await adminService.update(payload);
        resolve({
          success: true,
          message: "Admin updated successfully",
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

module.exports = AdminFacade;
