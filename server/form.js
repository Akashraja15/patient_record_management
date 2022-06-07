const express = require("express");
const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
app.use(express.static("public"));
const port = 8000;
let login = {};
const file = require("fs");
const cors = require("cors");
const dbconnection = require("./db");
const winlogger = require("./logger/logger");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

 
//user
app.post("/postQuery", (request, _response, _next) => {
  console.log(request);
  let object = {
    patientname: request.body.patientname,
    phone: request.body.phone,
    email: request.body.email,
    gender: request.body.gender,
    password: request.body.password,
    confirmpassword: request.body.confirmpassword,
    type: "user",
  };
 
  dbconnection.insert(object);
});

app.get("/getUser", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "user",
    }
  }
  dbconnection.get(data,"freshers_sample").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getUserId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "freshers_sample").then((_res) => {
    if (_res) {
      response.send(_res);
    } else {
      response.send("error");
    }
  });
});
app.delete("/delete/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "freshers_sample")
    .then((del_res) => {
      if (del_res) {
        response.send(del_res);
      } else {
        response.send("error");
      }
    });
});




//admin
app.get("/getAdmin", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "admin",
    }
  }
  dbconnection.get(data,"freshers_sample").then((getadmin_res) => {
    if (getadmin_res) {
      response.send(getadmin_res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getAdminId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "freshers_sample").then((adminid_res) => {
    if (adminid_res) {
      response.send(adminid_res);
    } else {
      response.send("error");
    }
  });
});





//bill
app.post("/postQueryBill", (request, _response, _next) => {
  console.log(request);
  let object = {
    patientname: request.body.formobject.patientname,
    phone: request.body.formobject.phone,
    email: request.body.formobject.email,
    gender: request.body.formobject.gender,
    disease: request.body.formobject.disease,
    insurance: request.body.formobject.insurance,
    fromdate: request.body.formobject.fromdate,
    todate: request.body.formobject.todate,
    user_id:request.body._id,
    type: "bill",
  };
 
  dbconnection.insert(object);
});

app.get("/getBill", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "bill",
    }
  }
  dbconnection.get(data,"freshers_sample").then((res) => {
    if (res) {
      response.send(res);
      console.log(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getBillId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "freshers_sample").then((bill_res) => {
    if (bill_res) {
      response.send(bill_res);
    } else {
      response.send("error");
    }
  });
});
app.delete("/delBill/:id/:id1", (request, response) => {
  dbconnection
    .del_id(request.params.id, request.params.id1, "freshers_sample")
    .then((delbill_res) => {
      if (delbill_res) {
        response.send(delbill_res);
      } else {
        response.send("error");
      }
    });
});





//user-billdata's
app.post("/postQueryUserBillData", (request, _response, _next) => {
  let user_id = request.body.user_id;
  let username = request.body.filename;
  console.log(user_id);
  let object = {
    name:username,
    login_id:user_id,
     file_type:"pdf",
     filename:username+".pdf",
     filepath:"Downloads\\"+username+".pdf",
    type: "userbilldata",
  };
 dbconnection.insert(object);
 console.log("data added");
});

app.get("/getUserBillData", (request, response) => {
  console.log(request);
  let data = {
    selector: {
      type: "userbilldata",
    }
  }
  dbconnection.get(data,"freshers_sample").then((userbill_res) => {
    if (userbill_res) {
      response.send(userbill_res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getUserBillDataId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "freshers_sample").then((userbillid_res) => {
    if (userbillid_res) {
      response.send(userbillid_res);
    } else {
      response.send("error");
    }
  });
});





//download bill
app.post("/downBill", (request, response) => {
  let loginid = request.body.user_id;
  console.log(loginid);
  console.log(request);
  let data = {
    selector: {
      type:"userbilldata",
      login_id:loginid,
    
    }
  }
  dbconnection.get(data,"freshers_sample").then((res) => {
    console.log(res);
    if (res) {
      response.send(res);
      console.log(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/downBillId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "freshers_sample").then((down_res) => {
    if (down_res) {
      response.send(down_res);
    } else {
      response.send("error");
    }
  });
});





//userdownloadbill
app.post("/userBillSave", (request, response) => {
  let filename = request.body.fname;
  let filepath = request.body.fpath;
  console.log(filename);
  console.log(filepath);
  console.log(request);

  const downloadFile = `C:\\Users\\akas2989\\${filepath}`;
  console.log(downloadFile);

  response.download(downloadFile);
});










app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
 
  winlogger.info("SUCCESS", "Server is running!!!");
  console.log(`server is listening on http://localhost:${port}`);
});
