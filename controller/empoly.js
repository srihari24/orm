const { employ } = require("../models");





exports.CreateEmploy = async (req, res) => {
  try {
    let employs = await employ.create(req.body);
    res.send({
      success: true,
      results: employs,
    });

    console.log(employs);
  } catch (error) {
    res.send({
      success: flase,
      results: error.message,
    });
  }
};

exports.getallEmploy = async (req, res) => {
  try {
    let employs = await employ.findAll();
    res.send({
      success: true,
      results: employs,
    });
    console.log(employs);
  } catch (error) {
    res.send({
      success: false,
      results: error.message,
    });
  }
};

exports.getbyidEmploy = async (req, res) => {
  try {
    let employs = await employ.findOne({ where: { id: req.params.id } });
    res.send(employs);
    console.log(employs);
  } catch (error) {
    res.send(error.message);
  }
};

exports.updateemplpy = async (req, res) => {
  try {
    let employs = await employ.update(req.body, {
      where: { id: req.params.id },
    });
    res.send({
      success: true,
      results: employs,
    });
  } catch (error) {
    res.send({
      success: false,
      results: error.message,
    });
  }
};

exports.employeeLogin = async (req, res) => {
  try {
    let employs = await employ.findOne({
      where: { email: req.body.email, firstName: req.body.firstName },
    });
    if (employs) {
      res.send({
        success: true,
        results: "logged in successfully",
      });
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
