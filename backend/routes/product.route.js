const express = require('express');
const { createProduct,getProducts, getSingleProduct } = require('../controllers/product.controller');


const router = express.Router();


router.route('/')
      .post(createProduct)
      .get(getProducts);
    
router.route('/:id')
      .get(getSingleProduct)
      .patch(/*Update Product*/)
      .delete(/* Deactivate Certain Product*/)

module.exports = router;