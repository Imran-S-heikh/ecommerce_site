const Product = require("../models/Product.model");
const catchAsync = require("../utils/catchAsync.util");

exports.createProduct = catchAsync(async function (req, res, next) {
    const newProduct = await Product.create(req.body)

    res.status(200).json({
        status: 'success',
        product: newProduct
    });
});

exports.getProducts = catchAsync(async function (req, res, next) {
    const products = await Product.find()

    res.status(200).json({
        status: 'success',
        products
    });
});


exports.getSingleProduct = catchAsync(async function (req, res, next) {
    const product = await Product.findById(req.params.id)

    res.status(200).json({
        status: 'success',
        product
    });
})