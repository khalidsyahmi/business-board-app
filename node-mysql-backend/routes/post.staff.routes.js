const express = require('express');

const postStaffControllers = require('../controllers/post.staff.controllers')

const router = express.Router();

router.post('/staff-list', postStaffControllers.createsStaff);

router.patch('/staff/:id/edit', postStaffControllers.updateStaff);

router.delete('/staff/:id/delete', postStaffControllers.deleteStaff);


module.exports = router;