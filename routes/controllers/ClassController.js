const ClassFacade = require("../facades/ClassFacade");
function ClassController() {
  this.classFacade = new ClassFacade();
  this.create = async (req, res) => {
    this.classFacade
      .create(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };
  this.getAll = async (req, res) => {
    this.classFacade
      .getAll(req.body)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };
}
const classController = new ClassController();
module.exports = classController;
