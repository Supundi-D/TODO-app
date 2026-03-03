const express = require('express');
const aboutRouter = express.Router();
const aboutController = require('../../controllers/public/aboutPageController');

aboutRouter.get('/' , aboutController.aboutPage);

module.exports = aboutRouter;