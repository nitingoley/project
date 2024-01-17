const express = require('express');
const app = express();
const port = process.env.PORT || 901;
const path = require('path');
const Sch_model = require("./db/database");
const hbs = require("hbs");


// console.log(path.join(__dirname ,  "../public"));

//   Middleware use 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));


// app.set('views', path.join(__dirname, 'templates', 'views'));
// // app.set('views', path.join(__dirname, 'templates', 'partials'));
// const template_path = path.join(__dirname, '../template/views');
// // const partial_path = path.join(__dirname, '../templates/partial');

// hbs.registerPartials(partial_path);




app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});


app.get("/chal", (req, res) => {
    res.sendFile(__dirname + "/top.htm")
});



app.post("/msg", async (req, res) => {
    const { name1, gmail, mess} = req.body;
    try {
        const User = new Sch_model({
            name1,
            gmail,
            mess
        });

        const data = await User.save();
        res.sendFile(__dirname + "/index.html")
        console.log("Message" + data);
    }
    catch (e) {
        res.status(404).send(e);
        console.log(e);
    }

})





app.listen(port, () => {
    console.log(`The port running on ${port}`);
});