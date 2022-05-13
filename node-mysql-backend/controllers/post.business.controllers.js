const Company = require('../models/company.business.model');

async function createCompany(req, res, next) {

  let company;
  try {
    company = new Company(req.body.title, req.body.summary, req.body.content, req.body.staff);
    console.log(company);
    company.saveCreate();
  } catch (error) {
      return next(error);
  }
  //res.redirect('/company-list');
  res.json({ message: 'created company successfully!', createCompany: company });
}

async function updateCompany(req, res) {

  //the same save function but check into if else statement for existing data
  //since it is an existing id, refer to params.id not the name attribute when first creation
  const company = new Company(req.body.title, req.body.summary, req.body.content, req.params.id);
  company.saveEdit();
  console.log(company);
  //res.redirect('/company-list');
  res.json({ message: 'updated company successfully!', updateCompany: company });
}

async function deleteCompany(req, res) {

  const company = new Company(null, null, null, req.params.id);
  await company.delete();

  //res.redirect('/company-list');
  res.json({ message: 'delete company successfully!', deleteCompany: company });
}

module.exports = {
  createCompany: createCompany,
  updateCompany: updateCompany,
  deleteCompany: deleteCompany
}