const mongoose = require('mongoose');

const WorkSchema = new mongoose.Schema({
    workID: {
        type: "String",
        required: true
    },
    workCompanyUsername: {
        type: "String",
        required: true
    },
    workProgrammer: {
        type: "String"
    },
    workDomain: {
        type: "String",
        required: true
    },
    workKeywords: {
        type: "Array"
    },
    workBio: {
        type: "String",
        required: true
    }
});

const WorkModel = mongoose.model("WorkModel", WorkSchema);

module.exports = WorkModel;