const publicRoute = require("./public");

const adminRoute = require("./admin");

module.exports = (app) => {
    publicRoute(app);
    adminRoute(app);
}