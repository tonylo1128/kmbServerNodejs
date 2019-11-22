const kmbDataRepos = require("../repositories/kmbDataRepos");
const http = require("http");

module.exports = {
  postDataFunc: (req, res) => {
    const temp = req.body.kmbData;

    kmbDataRepos.insertRecordS(temp);
  },

  getData: (req, res) => {
    kmbDataRepos.getDataFromServer().then(recieveRespFromkmbDataRepos => {
      res.json({
        recieveRespFromkmbDataRepos: recieveRespFromkmbDataRepos
      });
    });
  },

  getBusTime: (req, res) => {
    const inputA = req.body.inputA;
    const inputB = req.body.inputB;
    // console.log(inputA)
    // console.log(inputB)
    http.get(
      "http://etav3.kmb.hk/?action=geteta&lang=tc&route=" +
        inputA.route +
        "&bound=" +
        inputA.bound +
        "&stop_seq=" +
        inputB +
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
          console.log(data);
          res.json({
              dataForBusData: data
          })
        });
      }
    );
  }
};
