const express = require('express');

const postStaffControllers = require('../controllers/post.staff.controllers')

const router = express.Router();

router.post('/staff-list', postStaffControllers.createsStaff);

/* router.patch('/staff/:id/edit', postStaffControllers.updateCompany);

router.delete('/staff/:id/delete', postStaffControllers.deleteCompany); */


module.exports = router;