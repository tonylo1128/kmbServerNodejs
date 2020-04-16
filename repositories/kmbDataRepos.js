const models = require("../models/index")

module.exports = {
    insertRecordS(input){

        return models.kmb
        .bulkCreate(
            input
        ,
        { returning: true });
    },

    PartOfDataPerPageFunc(page, perPage){
        return models.kmb
        .findAll(
            {
                limit:perPage,
                offset: page*perPage
            }
        )
        .then( response=>{
            return response
        })
       
    },

    getDataFromServer(){
        return models.kmb
        .findAll()
        .then(response=>{
            return response;
        })
    }
}