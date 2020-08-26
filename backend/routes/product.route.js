const express = require('express');
const { createProduct,getProducts, getSingleProduct, updateProduct } = require('../controllers/product.controller');
const { authenticate } = require('../controllers/auth.controller');


const router = express.Router();


router.route('/')
      .post(authenticate,createProduct)
      .get(getProducts);
    
router.route('/:id')
      .get(getSingleProduct)
      .patch(updateProduct)
      .delete(/* Deactivate Certain Product*/)

module.exports = router;