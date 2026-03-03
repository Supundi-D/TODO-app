const express = require('express');
const adminProfileRoute = express.Router();
const adminProfileController = require('../../controllers/admin/adminProfileController');

adminProfileRoute.get('/',adminProfileController.adminProfilePage);

module.exports = adminProfileRoute;