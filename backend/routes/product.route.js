const express = require('express');


const router = express.Router();


router.route('/')
      .get(/*'get last 10 Product*/);
    
router.route('/:id')
      .get(/*'Get single Product*/)
      .patch(/*Update Product*/)
      .delete(/* Deactivate Certain Product*/)

module.exports = router;