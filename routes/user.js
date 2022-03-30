var express = require('express');
var router = express.Router();

const {createUser,getUsers} = require('../controller/user')

router.post('/create-user',createUser)
router.get('/get-users',getUsers)

module.exports = router ;
