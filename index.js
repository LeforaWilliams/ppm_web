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
let time = [];

app.post("/validateLimits", (req, res) => {
    temp = req.body.measurements[0].series.temperature;
    limits = req.body.measurements[0].limits.temperature;
    timeStamps = req.body.measurements[0].series.$_time;
    temp.forEach((tempLimit, time) => {
        if (tempLimit > limits.upperError) {
            limitResponse.push(
                `UPPER ERROR! Temperature above ${limits.upperError}`
            );
        } else if (tempLimit > limits.upperWarn) {
            limitResponse.push(
                `WARNING! Temperature above ${limits.upperWarn}`
            );
        } else if (tempLimit > limits.lowerWarn) {
            limitResponse.push(
                `WARNING! Temperature above ${limits.lowerWarn}`
            );
        } else if (tempLimit > limits.lowerError) {
            limitResponse.push(
                `LOWER ERROR! Temperature above ${limits.lowerError}`
            );
        } else {
            limitResponse.push("OK");
        }
    });
    res.send(limitResponse);
});

app.listen(8080, () => console.log("listening :D"));
