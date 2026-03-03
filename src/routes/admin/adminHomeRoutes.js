const express = require('express');
const adminHomeRoute = express.Router();
const adminHomeController = require('../../controllers/admin/adminHomeController');

adminHomeRoute.get('/',adminHomeController.adminHomePage);

module.exports = adminHomeRoute;