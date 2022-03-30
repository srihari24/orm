var express = require('express');
var router = express.Router();

const {createloginUser,userLogin} = require('../controller/login')


router.post('/login',createloginUser) ;

router.post('/loogin-user',userLogin) ;

module.exports = router ;
