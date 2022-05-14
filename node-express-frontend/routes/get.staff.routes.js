const express = require('express');

const getStaffControllers = require('../controllers/get.staff.controllers');

const router = express.Router();

/* router.get('/', function (req, res) {
  //go to home page
  res.redirect('/company-list');
});
 */
router.get('/staff-list', getStaffControllers.fetchAllStaff);

router.get('/create-staff', getStaffControllers.createStaff); //current

//router.get('/staff/:id', getStaffControllers.viewStaffProfile);//omitted

router.get('/staff/:id/edit', getStaffControllers.viewEditStaff);

module.exports = router;