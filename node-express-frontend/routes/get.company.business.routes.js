const express = require('express');

const getBusinessControllers = require('../controllers/get.company.business.controllers');

const router = express.Router();

router.get('/', function (req, res) {
  //go to home page
  res.render('home-page');
});

router.get('/company-list', getBusinessControllers.fetchAllCompany);

router.get('/create-company', getBusinessControllers.createCompany);
// company view
router.get('/company/:id', getBusinessControllers.fetchCompanyView);
//company edit view
router.get('/company/:id/edit', getBusinessControllers.editCompany);

module.exports = router;