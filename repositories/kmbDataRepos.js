const models = require("../models/index")

module.exports = {
    insertRecordS(input){

        return models.kmb
        .bulkCreate(
            input
        ,
        { returning: true });
    },

    getDataFromServer(){
        return models.kmb
        .findAll()
        .then(response=>{
            return response;
        })
    }
}