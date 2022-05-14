//import fetch from 'node-fetch';
const fetch = require('node-fetch')

//check the connecting routes first
//that thing does not trigger any error flags
async function createStaff(req, res, next) {

  let response;

  try {
    response = await fetch('http://localhost:3005/staff-list', {
      method: "POST",
      body: JSON.stringify({
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
        bio: req.body.bio
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    alert('Something went wrong!');
    return next(error);
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return next(error);
  }

  console.log(response);
  await response.json();

  res.redirect('/staff-list');
}

async function updateStaff(req, res) {

  const updateId = req.params.id;

  let response;

  try {
    response = await fetch(`http://localhost:3005/company/${updateId}/edit`, {
      method: "PATCH",
      body: JSON.stringify({
        title: req.body.title,
        summary: req.body.summary,
        content: req.body.content,
        id: updateId
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    alert('Something went wrong!');
    return next(error);
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return next(error);
  }

  console.log(response);
  await response.json();

  res.redirect('/company-list');
}

async function deleteStaff(req, res) {

  let response;

  try {
    response = await fetch(`http://localhost:3005/company/${req.params.id}/delete`, {
      method: "DELETE"
    });

  } catch (error) {
    alert('Something went wrong!');
    return next(error);
  }

  if (!response.ok) {
    console.log(response);
    alert('Something went wrong!');
    return next(error);
  }

  console.log(response);
  await response.json();
  res.redirect('/company-list');
}

module.exports = {
  createStaff: createStaff,
  updateStaff: updateStaff,
  deleteStaff: deleteStaff
}