const Cloudant = require("@cloudant/cloudant");
const url =
"https://2fbcb9ec-d57d-431a-8d72-186d88ddf478-bluemix.cloudantnosqldb.appdomain.cloud"
const username = "apikey-v2-kf8ex4frj52lu2wwin72qqktpi3occ9bfv4p80vbr99";
const password = "68fc5b9dc8c58071087abaecc44a5f29";
 
const cloudant = Cloudant({ url: url, username: username, password: password });

 
let insert = function (paramsvalue) {
  console.log(paramsvalue);
  return cloudant
    .use("freshers_sample")
    .insert(paramsvalue);
    
};
let get = function (admindata,dbname) {
  return cloudant.use(dbname).find(admindata);
};
let getId = function (id, dbfname) {
  return cloudant.use(dbfname).get(id);
};
let del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};
module.exports = { get, getId, insert, del_id };
