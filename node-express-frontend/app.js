const path = require('path');

const express = require('express');
//const fetch = require('node-fetch');

const getCompanybusinessRoutes = require('./routes/get.company.business.routes');
const postCompanyBusinessRoutes = require('./routes/post.company.business.routes');
const getStaffRoutes = require('./routes/get.staff.routes');
const postStaffRoutes = require('./routes/post.staff.routes');

const app = express();

//ejs exclusive
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

/* app.use(fetch); */

app.use(getCompanybusinessRoutes);
app.use(postCompanyBusinessRoutes);
app.use(getStaffRoutes);
app.use(postStaffRoutes);

app.use(function (error, req, res, next) {

  console.log(error);
  console.log('Hmm... nothing is here. Are u sure?');
  res.status(404).render('404');
});

app.use(function (error, req, res, next) {

  console.log(error);
  console.log('Whoopsie the server is down! try again later...');
  res.status(500).render('500');
});

app.listen(3000);
