const mongoose = require('mongoose');

const programmerSchema = new mongoose.Schema({
    programmerUsername: {
        type: "String",
        required: true
    },
    programmerName: {
        type: "String",
        required: true
    },
    programmerPassword: {
        type: "String",
        required: true
    },
    programmerBio: {
        type: "String",
        required: false
    },
    programmerWorks: {
        type: "Array"
    }
});

const ProgrammerModel = mongoose.model("ProgrammerModel", programmerSchema);

module.exports = ProgrammerModel;