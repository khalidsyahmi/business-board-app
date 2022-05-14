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

async function updateStaff(req, res) {

  //the same save function but check into if else statement for existing data
  //since it is an existing id, refer to params.id not the name attribute when first creation
  const staff = new Staff.StaffEdit(req.body.name, req.body.email, req.body.role, req.body.bio, req.params.id);
  staff.saveEdit();
  console.log(staff);

  res.json({ message: 'updated staff successfully!', updateStaff: staff });
}

async function deleteStaff(req, res) {

  const staff = new Staff.StaffEdit(null, null, null, null, req.params.id);
  await staff.delete();

  //res.redirect('/company-list');
  res.json({ message: 'deleted staff successfully!', deleteStaff: staff });
}

module.exports = {
  createsStaff: createsStaff,
  updateStaff: updateStaff,
  deleteStaff: deleteStaff
}