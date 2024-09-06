var express = require('express');
const { getAllUsers } = require('../controllers/user.controller');
var router = express.Router();


router.get('/users', getAllUsers );
 