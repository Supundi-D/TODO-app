const aboutRoutes = require('./aboutRoutes');
const homeRoutes = require('./homeRoutes');
const contactRoutes = require('./contactRoutes');
const todoRoutes = require('./todoRoutes');


module.exports = (app) => {
    app.use("/", homeRoutes);
    app.use("/about-us", aboutRoutes);
    app.use("/contact-us", contactRoutes);
    app.use("/", todoRoutes);
};