const express = require('express');

const postStaffControllers = require('../controllers/post.staff.controllers')

const router = express.Router();

//updated endpoints
router.post('/staff-list', postStaffControllers.createStaff);

/* router.post('/company/:id/edit', postBusinessControllers.updateCompany);

router.post('/company/:id/delete', postBusinessControllers.deleteCompany);
 */

module.exports = router;