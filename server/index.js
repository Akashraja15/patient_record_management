const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
var urlParser = bodyParser.urlencoded({ extended: false });
const cors = require('cors');
app.use(express.static('public'));
app.use(
    cors({
      origin: "http://localhost:4200",
    })
  );
app.get('/senddata', function (request, response) {
    response.json({"name":"Akash", id:"1", email: "akash07@gmail.com" })
  });
  
  app.post('/postquery', urlParser, function (request, response) {
    let fname = request.body.fname;
    let lname = request.body.lname;
    console.log(`${fname}   ${lname}`);
    let data = {
      first_name: fname,
      last_name: lname,
    };
    response.end(JSON.stringify(data));
  });
  
  app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on http://localhost:${port}`);
  });


const Cloudant = require("@cloudant/cloudant");
let url =
  "https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud";
let username = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
let password = "68fc5b9dc8c58071087abaecc44a5f29";

let cloudant = Cloudant({ url: url, username: username, password: password });

// cloudant.db
//   .use("sam")
//   .then(() =>
//     cloudant
//       .use("sam")
//       .insert({ akash: '1' }, 'rabbit')
//       .then((data) => {
//         console.log(data);
//       })
//   )
//   .catch((err) => {
//     console.log(err);
//   });

cloudant.use("freshers_sample").insert({ name: "Akash", id: "101" }).then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });