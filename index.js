const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

let temp = [];
let limits;
let limitResponse = [];
app.post("/validateLimits", function(req, res) {
    temp = req.body.measurements[0].series.temperature;
    limits = req.body.measurements[0].limits.temperature;
    temp.forEach(function(tempLimit) {
        if (tempLimit > limits.lowerError) {
            limitResponse.push(
                `Lower Error! Temperature above ${limits.lowerError}`
            );
        } else {
            limitResponse.push("OK");
        }
    });
    console.log("MESUREMENTS", limitResponse);

    res.send(req.body);
});

app.listen(8080, () => console.log("listening :D"));
