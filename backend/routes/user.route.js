const express = require('express');
const { signUp, signIn, authenticate, checkAdmin } = require('../controllers/auth.controller');
const { updateUser, updateAdmin, getAllUser } = require('../controllers/user.controller');


const router = express.Router();


router.route('/')
    .post(/*Create product*/)
    .get(authenticate,checkAdmin,getAllUser);

router.route('/:id')
    .get(/*'Get single user'*/)
    .patch(authenticate,updateUser)
    .delete(/* Deactivate Certain user*/);

router.patch('/update-admin/:id',authenticate,checkAdmin,updateAdmin);

router.post('/signup',signUp);
router.post('/login',signIn);

module.exports = router;
