const models = require("../models/index");
const { Op } = require("sequelize");

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

    searchingRFunc(input){
        return models.kmb
        .findAll({
            where: {
                [Op.or]:[
                    {路線所屬公司: input},
                    {路線: input },
                    {起點: input},
                    {方向: input},
                    {目的地: input},
                    {完成挑戰: input},
                    {開始時間: input},
                    {結束時間: input},
                    {總行程時間: input},
                    {Instagram記錄連結: input},
                    {備註: input}

                ]
            }
        }
        )
        .then(response=>{
            return response;
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