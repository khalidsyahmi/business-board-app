const express = require('express');

const getBusinessControllers = require('../controllers/get.business.controllers');

const router = express.Router();

/* router.get('/', function (req, res) {
  res.redirect('/company-list');
}); */

router.get('/company-list', getBusinessControllers.fetchAllCompany);

router.get('/create-company', getBusinessControllers.fetchAllStaff);
// company view
router.get('/company/:id', getBusinessControllers.fetchCompanyView);
//company edit view 
router.get('/company/:id/edit', getBusinessControllers.editCompany);

module.exports = router;