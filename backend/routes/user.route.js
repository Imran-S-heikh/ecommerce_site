const express = require('express');
const { signUp, signIn } = require('../controllers/auth.controller');


const router = express.Router();


router.route('/')
    .post(/*Create product*/)
    .get(/*'get last 10 user'*/);

router.route('/:id')
    .get(/*'Get single user'*/)
    .patch(/*Update user*/)
    .delete(/* Deactivate Certain user*/);

router.post('/signup',signUp);
router.post('/login',signIn);

module.exports = router;
