const express = require('express');
const cookieParser = require('cookie-parser')
const globalErrorhandler = require('./controllers/error.controller');
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/products', productRoute);
app.use('/api/v1/users', userRoute);


app.use(globalErrorhandler)



module.exports = app;