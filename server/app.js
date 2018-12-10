const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require("body-parser");
const createError = require('http-errors');
const path = require('path');
const helmet = require('helmet');
const mongoose = require("mongoose");
const cors = require('cors');
require('dotenv').config();
const Order = require("./shema");

const app = express();
const router = express.Router();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.options(process.env.WHITELIST, cors()); 

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
let db = mongoose.connection;
db.once("open", () => console.log("connected to the database"));
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/", router);

router.post("/", (req, res) => {
  const { name, time, address, order } = req.body;

  let data = new Order();
  data.name = name;
  data.time = time;
  data.address = address;
  data.order = order;

  data.save((err, result) => {
    if (err) return res.json({ error: err });

    return res.status(201).send(result);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
 
module.exports = app;