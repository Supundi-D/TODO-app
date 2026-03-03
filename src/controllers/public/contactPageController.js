const contactController = {
    async contactPage(req,res) {
        res.render('public/contact-us/index', {
            title: "Contact us page"
        });
    }
}

module.exports = contactController;