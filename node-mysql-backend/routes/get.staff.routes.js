const express = require('express');

const getStaffControllers = require('../controllers/get.staff.controllers');

const router = express.Router();

/* router.get('/', function (req, res) {
  res.redirect('/company-list');
}); */

router.get('/staff-list', getStaffControllers.fetchAllStaff);

/* router.get('/create-company', getBusinessControllers.fetchAllStaff);
// company view
router.get('/company/:id', getBusinessControllers.fetchCompanyView); */
//company edit view 

router.get('/staff/:id/edit', getStaffControllers.editStaff);

module.exports = router;