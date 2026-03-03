const adminProfileController = {
    async adminProfilePage(req,res){
        res.render('admin/profile-page/index',{
            title:"Admin Profile"
        });
    }
}

module.exports = adminProfileController;