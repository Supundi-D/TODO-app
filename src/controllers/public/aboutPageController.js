const aboutController = {
    async aboutPage(req,res) {
        res.render('public/about-us/index', {
            title: "About page"
        });
    }
}

module.exports = aboutController;