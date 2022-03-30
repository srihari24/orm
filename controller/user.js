
const { User }= require('../models')
exports.createUser = async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.send(user);
  } catch (error) {
    res.send(error.message);
  }
};

exports.getUsers = async (req, res) => {
  console.log("get users");
  try {
    let users = await User.findAll();
    res.send(users);
  } catch (error) {
    res.send(error.message);
  }
};
