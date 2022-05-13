const express = require('express');

//const db = require('../data/database');
//const Company = require('../models/company.business.model');
const postBusinessControllers = require('../../node-API-backend/controllers/post.business.controllers')

const router = express.Router();

router.post('/company-list', postBusinessControllers.createCompany);

router.patch('/company/:id/edit', postBusinessControllers.updateCompany);

router.delete('/company/:id/delete', postBusinessControllers.deleteCompany);


module.exports = router;