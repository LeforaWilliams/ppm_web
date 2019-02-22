const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

let temp = 0;

//schnittstelle soll info über gesnedete messdaten zurücksenden

app.post("/validateLimits", function(req, res) {
    console.log(req.body);
    res.send(req.body);
});

app.get("/validateLimits", function(req, res) {
    temp = req.body;
    console.log(temp);
});

app.listen(8080, () => console.log("listening :D"));
