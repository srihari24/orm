const { Login } = require("../models");
const bcrypt = require("bcrypt");

exports.createloginUser = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    let loginUser = await Login.create(req.body);
    res.send({
      success: true,
      results: loginUser,
    });
  } catch (error) {
    res.send({
      success: false,
      results: error.message,
    });
  }
};

exports.userLogin = async (req, res) => {
  try {
    let login = await Login.findOne({
      where: { email: req.body.email, firstName: req.body.firstName },
    });
    if (login) {
      // res.send({
      //   success: true,
      //   results: "logged in successfully",
      // });
    } else {
      res.send({
        success: true,
        results: "user not found",
      });
    }
    
  } catch (error) {
    res.send({
      success: false,
      results: error.message,
    });
  }
};
