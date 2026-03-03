const adminHomeRoutes = require('./adminHomeRoutes');
const adminProfileRoute = require('./adminProfileRoutes');

module.exports = (app) => {
    app.use('/admin', adminHomeRoutes);
    app.use('/admin/profile-page', adminProfileRoute);
   
};