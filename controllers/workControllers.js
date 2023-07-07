const WorkModel = require('../models/WorkModel');

const getWork = (req, res) => {
    WorkModel.find().then((data) => {
        console.log(data);
        res.send(data);
    })
};

const addWork = async (req, res) => {
    try {
        const data = req.body;

        console.log(data);

        await WorkModel.insertMany(data).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        });
    } catch (err) {
        console.log(err);
    }
}

const applyWork = async (req, res) => {
    try {
        const data = req.body;

        // console.log(data);

        const newWork = new WorkModel({
            workID: data["workID"],
            workCompanyUsername: data["workCompanyUsername"],
            workProgrammer: data["workProgrammer"],
            workDomain: data["workDomain"],
            workKeywords: data["workKeywords"],
            workBio: data["workBio"]
        });

        console.log(newWork);

        await WorkModel.deleteOne({
            workID: data["workID"]
        }).then(result => {
            WorkModel.insertMany(newWork).then(output => {
                res.send(output);
            }).catch(err => {
                res.send(err);
            })
        }).catch(err => {
            res.send(err);
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports.getWork = getWork;
module.exports.addWork = addWork;
module.exports.applyWork = applyWork;