//const res = require('express/lib/response')
const fetch = require('node-fetch')

async function fetchAllStaff(req, res, next){

}
async function createStaff(req, res, next){
res.render('staff/create-staff');
}
async function viewStaffProfile(req, res, next){

}
async function viewEditStaff(req, res, next){

}


module.exports = {
    fetchAllStaff:fetchAllStaff,
    createStaff:createStaff,
    viewStaffProfile:viewStaffProfile,
    viewEditStaff:viewEditStaff
}