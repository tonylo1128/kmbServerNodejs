const models = require("../models/index")

module.exports = {
    insertRecordS(input){
        
        for (let i=0; i<input.length; i++){
            console.log(i);
            console.log(input[i])
        }

        
        return models.kmb
        .bulkCreate(
            input
        ,
        { returning: true });
    }
}