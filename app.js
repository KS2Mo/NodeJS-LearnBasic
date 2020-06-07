const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const companyRouter = require('./routes/company');
const staffRouter = require('./routes/staff');
const shopRouter = require('./routes/shop');

const mongoose = require('mongoose');

const app = express();
//mongodb+srv://kassarin:kassarin@ks2mo-slgji.mongodb.net/test?authSource=admin&replicaSet=KS2Mo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
//
mongoose.connect('mongodb+srv://kassarin:kassarin@ks2mo-slgji.mongodb.net/nodeapi?retryWrites=true&w=majority', 
{
    useNewUrlParser: true,
    useUnifiedTopology:true,
    useCreateIndex: true,
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/company', companyRouter);
app.use('/staff', staffRouter);
app.use('/shop', shopRouter);
module.exports = app;
