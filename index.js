const express = require ('express');
const app = express();
const cors = require ('cors');
const bodyParser = require ('body-parser');
const multer = require('multer');
const port =  process.env.PORT ||8081;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));


const kmbDataCon = require("./controllers/kmbDataController")

app.post("/postData" , kmbDataCon.postDataFunc)
app.get("/", kmbDataCon.getData)
app.post("/getbustime", kmbDataCon.getBusTime)
app.get("/testing", kmbDataCon.testing)

// app.get("/getdata?page=:pageValue&per_page=:perPageValue", (req, res)=>{
//     return res.json({
//         pageValue: req.params.pageValue,
//         perPageValue: req.params.perPageValue
//     })
// })

app.get("/getdata", kmbDataCon.PartOfDataPerPageFunc )

app.listen(port, function(){
    console.log("Server is running on:"+port)
})
