const db = require('../../config/database');

const homeController = {
    async home(req, res) {
        try {
            let userIP =req.ip ;
            let view_time = new Date();

            const [result] = await db.query(
                "INSERT INTO pageCount (user_IP,view_time) VALUES (?, ?)", [userIP, view_time]
            );

            console.log("Insert Result:", result);


            const [rows] = await db.query(
                "SELECT COUNT(*) AS total FROM pageCount"
            );

            const totalCount = rows[0].total; 

            console.log("DB Count:", totalCount);

        return res.render('home-page/index', {
            title: "Home",
            count: totalCount
        });

    } catch (err) {
        console.log(err);
    }
    }

}
module.exports = homeController;