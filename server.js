const express = require("express");
const app = express();
const bodyParser = require("body-parser");

let vehicles = {
  1: {
    id: 1,
    make: "Honda",
    model: "Accord",
    year: 2020,
    color: "grey",
    plateNumber: "ES6 3G6",
    vin: "1G1ZT51806F128009"
  },
  2: {
    id: 2,
    make: "Infiniti",
    model: "G37",
    year: 2009,
    color: "blue",
    plateNumber: "RW4 993",
    vin: "JH4KA3240HC002301"
  },
  3: {
    id: 3,
    make: "Porsche",
    model: "Macan",
    year: 2019,
    color: "red",
    plateNumber: "6HG 2ER",
    vin: "JH4KA3160KC018606"
  }
};

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/vehicles", (req, res) => {
  return res.send(Object.values(vehicles));
});

app.get("/vehicles/:vehicleId", (req, res) => {
  return res.send(vehicles[req.params.vehicleId]);
});

app.post("/vehicles", (req, res) => {
  return res.send("POST HTTP method on user resource");
});

app.put("/vehicles", (req, res) => {
  return res.send("PUT HTTP method on user resource");
});

app.delete("/vehicles", (req, res) => {
  return res.send("DELETE HTTP method on user resource");
});

app.put("/vehicles/:vehicleId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete("/vehicles/:vehicleId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});
