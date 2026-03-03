const adminHomeController = {
    async adminHomePage(req,res){
        res.render('admin/home-page/index',{
            title:"Admin Home"
        });
    }
}

module.exports = adminHomeController;