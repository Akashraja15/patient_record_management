
const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
var login = {};
const file = require("fs");
const { request } = require("http");
const { response } = require("express");
const { nextTick } = require("process");
const cors = require("cors");
const dbconnection = require("./db");
// app.use(express.static("public"));
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

 
app.post("/postquery", (request, response, next) => {
  console.log(request);
  var object = {
    patientname: request.body.patientname,
    phone: request.body.phone,
    email: request.body.email,
    password: request.body.password,
    confirmpassword: request.body.confirmpassword,
  };
 

  dbconnection.insert(object);
  console.log("Data added");
});

app.get("/getUser", (request, response) => {
  console.log(request);
  console.log("Fetching Begins");
  dbconnection.get("freshers_sample").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getUserId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "freshers_sample").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.delete("/delete/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "freshers_sample")
    .then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
});
 
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
 
  console.log(`server is listening on http://localhost:${port}`);
});