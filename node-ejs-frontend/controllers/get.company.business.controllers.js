//import fetch from 'node-fetch';
const fetch = require('node-fetch')

async function fetchAllCompany(req, res, next) {

  let response;

  try {
    response = await fetch('http://localhost:3005/company-list');
  } catch (error) {
    //console.log(response);
    alert('Something went wrong!');
    return next(error);
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return next(error);
  }

  const responseData = await response.json();
  const companies = responseData.companies;

  res.render('company-list', { posts: companies });
}

async function createCompany(req, res) {

  let response;

  try {
    response = await fetch('http://localhost:3005/create-company');
  } catch (error) {
    console.log(response);
    //res.status(500).render('500');
    alert('Something went wrong!');
    return next(error);
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return next(error);
  }

  const responseData = await response.json();
  const staffs = responseData.staffs;

  res.render('create-company', { staffs: staffs });
}

async function fetchCompanyView(req, res) {

  let response;

  try {
    response = await fetch(`http://localhost:3005/company/${req.params.id}}`);
  } catch (error) {
    //console.log(response);
    //res.status(500).render('500');
    alert('Something went wrong!');
    return next(error);
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return next(error);
  }

  const responseData = await response.json();
  const companyDetail = responseData.companyDetail;

  res.render('company-detail', { companyDetail: companyDetail });
}

async function editCompany(req, res) {

  let response;

  try {
    response = await fetch(`http://localhost:3005/company/${req.params.id}/edit`);
  } catch (error) {
    console.log(response);
    //res.status(500).render('500');
    alert('Something went wrong!');
    return next(error);
  }

  if (!response.ok) {
    alert('Something went wrong!');
    return next(error);
  }

  const responseData = await response.json();
  const view = responseData.view;

  res.render('update-company', { post: view });
}

module.exports = {
  fetchAllCompany: fetchAllCompany,
  createCompany: createCompany,
  fetchCompanyView: fetchCompanyView,
  editCompany:editCompany
}