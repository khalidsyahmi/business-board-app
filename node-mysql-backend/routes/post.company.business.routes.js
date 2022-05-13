const express = require('express');

const postBusinessControllers = require('../controllers/post.business.controllers')

const router = express.Router();

router.post('/company-list', postBusinessControllers.createCompany);

router.patch('/company/:id/edit', postBusinessControllers.updateCompany);

router.delete('/company/:id/delete', postBusinessControllers.deleteCompany);


module.exports = router;