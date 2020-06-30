const kmbDataRepos = require("../repositories/kmbDataRepos");
const http = require("http");

module.exports = {
  postDataFunc: (req, res) => {
    const temp = req.body.kmbData;

    kmbDataRepos.insertRecordS(temp);
  },




  searchingFunc : (req, res)=>{
    console.log("We are in the first steop of searching")
    const recievedValue = req.body.inputSearchValue;

    console.log(recievedValue)
    const serachKeywords = "235";
    
    kmbDataRepos.searchingRFunc(recievedValue)
    .then(resp=>{
        res.json({
          returnResp: resp
        });
      })
  },





  PartOfDataPerPageFunc: (req, res)=>{
    var page = req.query.page;
    var per_page = req.query.per_page;
    if(page==null || per_page ==null || page==1){
      page = 0;
      per_page=30;
    }
    else{
      page--;
    }

    kmbDataRepos.PartOfDataPerPageFunc(page, per_page)
    .then(
      responseFromRepos =>{

        res.json({
          recieveRespFromkmbDataRepos: 
            responseFromRepos.length>0?  responseFromRepos : "There is no result"
      })
      }
    )
    
  },

  getSpecific:(req,res)=>{
    console.log("WE ARE IN getSpecific=-============================================")
    console.log(req)
    kmbDataRepos.getSpecific(req.body)
    .then((resp)=>{
      res.json({
        resp
      })
    })
  },

  testing : (req, res)=>{
    console.log("Testing");
    res.json({
      testing:"testing"
    })
  },

  deleteOne: (req, res)=>{
    console.log("Congrats ! it work ! sucker !! You are in deleteOneFunction now ! ! !")
  },


  updateRecord:(req, res)=>{
    console.log("EXECUTING UPDATE FUNCTION+++++++++++++++++++++++")
    let temp = req.body
    console.log(req.body)

    kmbDataRepos.updateRecord(temp)
    .then(respFromReps=>{
      console.log("Here is the respFromReps !")
      console.log(respFromReps)
      res.json({
        respFromReps
      })
    })

    // res.json({
    //   MotherFucker:"MotherFucker"
    // })


  },



  getData: (req, res) => {
    let ip = require("ip");
    console.log("Someone using get in the website and he/ she is: ")
    console.dir ( ip.address() );

    kmbDataRepos.getDataFromServer().then(recieveRespFromkmbDataRepos => {
      res.json({
        recieveRespFromkmbDataRepos: recieveRespFromkmbDataRepos
      });
    });
  },

  getBusTime: (req, res) => {
    // let ip = require("ip");
    // console.log("Someone using get time function and he/ she is: ")
    // console.dir ( ip.address() );

    try {

    
    const inputA = req.body.inputA;

    let resultList = [];
    let completed_requests = 0;

    for (let i=0; i<inputA.response.length; i++){
      http.get(
        "http://etav3.kmb.hk/?action=geteta&lang=tc&route=" +
          inputA.route +
          "&bound=" +
          inputA.bound +
          "&stop_seq=" +
          inputA.response[i].Seq +
          "&servicetype=" +
          inputA.serviceType +
          "&updatedTime=1531798892000",
        resp => {
          let data = "";
          // A chunk of data has been recieved.
          resp.on("data", chunk => {
            data += chunk;
          });
  
          // The whole response has been received. Print out the result.
          resp.on("end", () => {
            
            let temp = JSON.parse(data)
            // console.log(temp);
            // console.log("---------------------")
            resultList.push(temp)
            completed_requests++;
            if(completed_requests== inputA.response.length){
              res.json({
                dataForBusData:resultList
              })
            }
          })
          
          
        }
      );

    }
    console.log("THIS IS THE END OF THE FOR LOOP")
    console.log(resultList)


  } catch (e) {
    res.json({
      message: e.message
    })
  } 

  }



  
};
