var express = require("express");
const {
  CreateEmploy,
  getallEmploy,
  getbyidEmploy,
  updateemplpy,
  employeeLogin,
} = require("../controller/empoly");
var router = express.Router();

router.post("/create-empoly", CreateEmploy);

router.get("/get-all-employ", getallEmploy);
router.get("/get-employ-byid/:id", getbyidEmploy);

router.put("/update-employ/:id", updateemplpy);

router.post("/employee-login", employeeLogin);

module.exports = router;
