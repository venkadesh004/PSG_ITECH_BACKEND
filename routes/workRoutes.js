const express = require('express');
const Router = express.Router();

const {getWork, addWork, applyWork} = require('../controllers/workControllers');

Router.route('/getWork').get(getWork);
Router.route('/addWork').post(addWork);
Router.route('/applyWork').put(applyWork);

module.exports = Router;