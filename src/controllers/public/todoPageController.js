const db = require('../../config/database');
const AppError = require('../../../errors');

const todoController = {
    async todoPage(req, res) {
        console.log(req.method)
        if (req.method==="POST"){
            console.log("type of :", typeof req.body.task);
            try {
                
                let task = req.body.task.toString();
                let status = req.body.status ? 1 :0;
                let created_at = new Date();
    
                const [result] = await db.query(
                    "INSERT INTO tasks (task,status,created_at) VALUES (?, ?, ?)", [task, status, created_at]
                );
    
                console.log("Insert Task:", result);
                
    
            } catch (err) {
                console.log(err);
            
            }
        res.redirect("/form")
        return
        }
        const [rows] = await db.query("SELECT * FROM tasks");

        res.render('public/form/index', {
            title: "TODO page",
            tasks: rows
        });
    },
    async deleteTask(req, res) {
        console.log(req.params);
        try {

            let id = req.params.id;  

            const [remove] = await db.query(
                "DELETE FROM tasks WHERE id = ?", [id]
            );
            console.log("Deleted Task is:", remove);

        } catch (err) {
            console.log(err);
        }

        res.redirect("/form");
    },
    async editPage(req, res, next) {

        try {
            const id = req.params.id;
    
            const [rows] = await db.query(
                "SELECT * FROM tasks WHERE id = ?", [id]
            );
    if (rows.length == 0){
       throw new AppError("Requested TODO does not exist", 222)
    }

            res.render('public/form/edit', {
                title: "Edit Task",
                task: rows[0],
            }
        );
            
    
        } catch (err) {
           next(err);
            console.log(err);
        }
    },
    async updateTask(req, res) {
        try {
            const id = req.params.id;
            const updatedTask = req.body.task;
    
            await db.query(
                "UPDATE tasks SET task = ? WHERE id = ?",[updatedTask, id]
            );
            res.render('public/form/edit', {
                title: "Edit Task",
                task: rows[0]
            });
    
        } catch (err) {
            console.log(err);
        }
    
        res.redirect("/form");
    }
}

module.exports = todoController;