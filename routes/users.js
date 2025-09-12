const express = require('express');
const router = express.Router();
const {getUser, getUserById}= require('../controllers/usersController');


router.get('/users',getUser);
router.get('/:id',getUserById);


module.exports = router;