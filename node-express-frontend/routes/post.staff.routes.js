const express = require('express');

const postStaffControllers = require('../controllers/post.staff.controllers')

const router = express.Router();

//updated endpoints
router.post('/staff-list', postStaffControllers.createStaff);

router.post('/staff/:id/edit', postStaffControllers.updateStaff);

router.post('/staff/:id/delete', postStaffControllers.deleteStaff);


module.exports = router;