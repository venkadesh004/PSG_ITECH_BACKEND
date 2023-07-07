const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    companyUsername: {
        type: "String",
        required: true
    },
    companyName: {
        type: "String",
        required: true
    },
    companyPassword: {
        type: "String",
        required: true
    },
    companyWorks: {
        type: "Array"
    }
});

const CompanyModel = mongoose.model("CompanyModel", companySchema);

module.exports = CompanyModel;