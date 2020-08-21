const express = require('express');


const router = express.Router();


router.route('/')
    .post(/*Create product*/)
    .get(/*'get last 10 user'*/);

router.route('/:id')
    .get(/*'Get single user'*/)
    .patch(/*Update user*/)
    .delete(/* Deactivate Certain user*/);

module.exports = router;
