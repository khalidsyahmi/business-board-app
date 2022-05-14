const Staff = require('../models/staff.model');

async function createsStaff(req, res, next) {

  let staff;
  try {
    staff = new Staff(req.body.name, req.body.email, req.body.role, req.body.bio);
    console.log(staff);
    staff.saveCreate();
  } catch (error) {
      return next(error);
  }
  //res.redirect('/company-list');
  res.json({ message: 'created staff successfully!', staff: staff });
}

/* async function updateCompany(req, res) {

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
} */

module.exports = {
  createsStaff: createsStaff,
/*   updateCompany: updateCompany,
  deleteCompany: deleteCompany */
}