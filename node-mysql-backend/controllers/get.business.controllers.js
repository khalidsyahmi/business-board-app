
const Company = require('../models/company.business.model');

async function fetchAllCompany(req, res, next) {

    let companies;
    try {
        companies = await Company.fetchAllCompany();
        //console.log(companies[0]);
    } catch (error) {
        return next(error);
    }

    // res.render('company-list', { posts: posts });
    res.json({ companies: companies });
}

async function fetchAllStaff(req, res) {

    const staffs = await Company.fetchAllStaff();

    res.json({ staffs: staffs });
}

async function fetchCompanyView(req, res) {

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
}

async function editCompany(req, res) {

    const company = new Company(null, null, null, req.params.id);
    const posts = await company.fetchCompanyEdit();

    if (!posts || posts.length === 0) {
        return res.status(404).render('404');
    }

    //res.render('update-company', { post: posts[0] });
    res.json({ message: 'Viewed company successfully!', view: posts[0] });
}

module.exports = {
    fetchAllCompany: fetchAllCompany,
    fetchAllStaff: fetchAllStaff,
    fetchCompanyView: fetchCompanyView,
    editCompany: editCompany
}