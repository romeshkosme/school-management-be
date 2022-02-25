var express = require("express");
var router = express.Router();
const authController = require("./controllers/AuthController");
// const adminController = require("./controllers/AdminController");
const userController = require("./controllers/UserController");
const studentController = require("./controllers/StudentController");
const teacherController = require("./controllers/TeacherController");
const adminController = require("./controllers/AdminController");
const classController = require("./controllers/ClassController");
const { authenticate } = require("./helpers/middleware");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/api/user/register", (req, res) =>
  authController.register(req, res)
);
router.post("/api/user/login", (req, res) => authController.login(req, res));

// user
router.post("/api/user/add", (req, res) => userController.create(req, res));
router.post("/api/user/get", (req, res) => userController.get(req, res));

// student
router.post("/api/student/getAll", (req, res) =>
  studentController.getAll(req, res)
);
router.post("/api/student/get", (req, res) => studentController.get(req, res));

//teacher
router.post("/api/teacher/getAll", (req, res) =>
  teacherController.getAll(req, res)
);
router.post("/api/teacher/get", (req, res) => teacherController.get(req, res));

//admin
router.post("/api/admin/getAll", (req, res) =>
  adminController.getAll(req, res)
);
router.post("/api/admin/get", (req, res) => adminController.get(req, res));

//class
router.post("/api/class/add", (req, res) =>
  classController.create(req, res)
);
router.post("/api/class/getAll", (req, res) =>
  classController.getAll(req, res)
);

module.exports = router;
