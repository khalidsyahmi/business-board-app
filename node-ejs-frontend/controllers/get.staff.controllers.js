//const res = require('express/lib/response')
const fetch = require('node-fetch')

async function fetchAllStaff(req, res, next) {

    let response;

    try {
        response = await fetch('http://localhost:3005/staff-list');
    } catch (error) {
        console.log(response);
        alert('Something went wrong!');
        return next(error);
    }

    if (!response.ok) {
        alert('Something went wrong!');
        return next(error);
    }

    const responseData = await response.json();
    const staffs = responseData.staffs;

    res.render('staff/staff-list', { staffs: staffs });
}

//lmao
async function createStaff(req, res, next) {

    res.render('staff/create-staff');
}

async function viewStaffProfile(req, res, next) {

    let response;

    try {
        response = await fetch(`http://localhost:3005/staff/${req.params.id}/edit`);
    } catch (error) {
        console.log(response);
        alert('Something went wrong!');
        return next(error);
    }

    if (!response.ok) {
        alert('Something went wrong!');
        return next(error);
    }

    const responseData = await response.json();
    const staffProfile = responseData.editStaff; //key exposure from backend

    res.render('staff/update-staff', { staffProfile: staffProfile });
}


module.exports = {
    fetchAllStaff: fetchAllStaff,
    createStaff: createStaff,
    viewStaffProfile: viewStaffProfile
}