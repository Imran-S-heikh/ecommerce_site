const app       = require('./app');
const mongoose  = require('mongoose');

const port  = process.env.PORT || 3000;
const DB = process.env.DB_STRING; 

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('DB conntection establish')).catch(err=>console.log(err));

app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
});