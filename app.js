const express = require('express');
const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoutes');
const courseRoute = require('./routes/courseRoute');
const categoryRoute = require('./routes/categoryRoute')



const app = express();

//Connect DB
mongoose.connect('mongodb://localhost/smartedu-db')
.then(()=>{
    console.log('DB connected succesfully.')
})



//template engine
app.set("view engine","ejs")

//Middleware
app.use(express.static("public"));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Routes
app.use('/', pageRoute);
app.use('/courses',courseRoute)
app.use('/categories',categoryRoute)

const port = 3000;
app.listen(port, () => {
    console.log(`app started on port ${port}`);
});
