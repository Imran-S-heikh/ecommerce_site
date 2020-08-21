const express = require('express');

const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');


const app = express();

app.use('/api/v1/products', productRoute);
app.use('/api/v1/users', userRoute);



module.exports = app;