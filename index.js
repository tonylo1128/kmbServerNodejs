const express = require ('express');
const app = express();
const cors = require ('cors');
const bodyParser = require ('body-parser');
const multer = require('multer');


app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));


const kmbDataCon = require("./controllers/kmbDataController")

app.post("/postData" , kmbDataCon.postDataFunc)
app.get("/", kmbDataCon.getData)
app.post("/getbustime", kmbDataCon.getBusTime)

app.listen(process.env.PORT)
