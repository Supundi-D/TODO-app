const express = require("express");
const router = express.Router();
const homeController = require('../../controllers/public/homePageController');

router.get('/', homeController.home);

module.exports = router;
