const path = require('path')
const express = require('express');
// const expressLayouts = require('express-ejs-layouts');

const engine = require('ejs-mate');

const routes = require('./src/routes');


const app = express();

// app.use(expressLayouts);
app.set('layout', 'layout')

app.engine('ejs', engine);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'src', 'views'));


routes(app);
app.use((req,res)=>{
    
    res.status(404).render("errors/404",
        {title:"error"}
    )
}
)

app.use((err,req,res,next)=>{

    const status = err.statusCode || 500;

    const message = err.message;

    res.status(status).render("errors/error", {
        title: "Ooops! An error occurred",
        err_code: status,
        err_message: message
    })

})

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
