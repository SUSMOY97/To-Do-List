const express = require("express");
const bodyParser = require("body-parser");

let items = ["Buy Food", "Cook Food", "Eat Food"];


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/", function(req, res) {
    let today = new Date();



    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"

    };
    var day = today.toLocaleDateString("en-US", options);
    res.render('list', { kindofday: day, newListItem: items });
});
app.post("/", function(req, res) {
    let item = req.body.newItem;
    console.log(item);
    items.push(item)
    res.redirect("/");

})


app.listen(3000, function() {
    console.log("Server started on ported 3000.....");
})