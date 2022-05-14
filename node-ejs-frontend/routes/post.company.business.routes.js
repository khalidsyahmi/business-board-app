const express = require('express');

const postBusinessControllers = require('../controllers/post.company.business.controllers')

const router = express.Router();

//updated endpoints
router.post('/company-list', postBusinessControllers.createCompany);

router.post('/company/:id/edit', postBusinessControllers.updateCompany);

router.post('/company/:id/delete', postBusinessControllers.deleteCompany);


module.exports = router;