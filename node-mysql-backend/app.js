const express = require('express');

const db = require('./data/database');

const getCompanyRoutes = require('./routes/get.company.business.routes');
const postCompanyRoutes = require('./routes/post.company.business.routes');
const getStaffRoutes = require('./routes/get.staff.routes');
const postStaffRoutes = require('./routes/post.staff.routes');

const enableCors = require('./middlewares/cors');

const app = express();

app.use(enableCors);
app.use(express.json());

app.use(getCompanyRoutes);
app.use(postCompanyRoutes);
app.use(getStaffRoutes);
app.use(postStaffRoutes);

//response as json instead of rendering
app.use(function (error, req, res, next) {
  res.status(500).json({
    message: 'Something went wrong!',
  });
});

//database exclusive
db.initDb()
  .then(function () {
    app.listen(3005);
  })
  .catch(function (error) {
    console.log('Connecting to the database failed!');
  });