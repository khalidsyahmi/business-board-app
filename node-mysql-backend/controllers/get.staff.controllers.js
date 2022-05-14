
const Staff = require('../models/staff.model');

async function fetchAllStaff(req, res, next) {

    let staffs;
    try {
        staffs = await Staff.Staff.fetchAllStaff();
        //console.log(staffs);
    } catch (error) {
        return next(error);
    }

    res.json({ staffs: staffs });
}

/* async function createStaff(req, res) {

    const staffs = await Company.fetchAllStaff();

    res.json({ staffs: staffs });
} */

/* async function fetchCompanyView(req, res) {

    const companies = new Company(null, null, null, req.params.id);
    const company = await companies.fetchCompany();
    console.log(company[0]);

    if (!company || company.length === 0) {
        return res.status(404).render('404');
    }

    //array zero in [posts]
    const companyData = {
        ...company[0],
        date: company[0].date.toISOString(),
        humanReadableDate: company[0].date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        }),
    };

    //res.render('company-detail', { companyDetail: postData });
    res.json({ companyDetail: companyData });
} */

async function editStaff(req, res) {

    const staffs = new Staff.StaffEdit(null, null, null, null, req.params.id);
    const staff = await staffs.fetchStaffEdit();
    console.log(staff[0]);

    if (!staff || staff.length === 0) {
        return res.status(404).render('404');
    }

    //res.render('update-company', { post: posts[0] });
    res.json({ message: 'Viewed staff edit successfully!', editStaff: staff[0] });
}

module.exports = {
    fetchAllStaff: fetchAllStaff,
    /*   createStaff: createStaff, */
    /* fetchCompanyView: fetchCompanyView, */
    editStaff: editStaff
}