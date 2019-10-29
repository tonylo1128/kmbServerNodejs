const express = require ('express');
const app = express();
const cors = require ('cors');
const bodyParser = require ('body-parser');
const multer = require('multer');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const kmbDataCon = require("./controllers/kmbDataController")

app.post("/postData" , kmbDataCon.postDataFunc)



app.listen(8001)
