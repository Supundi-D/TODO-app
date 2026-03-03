const express = require('express');
const contactRouter = express.Router();
const contactController = require('../../controllers/public/contactPageController');

contactRouter.get('/' ,contactController.contactPage); 

module.exports = contactRouter;