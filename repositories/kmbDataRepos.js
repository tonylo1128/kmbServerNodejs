const models = require("../models/index");
const { Op } = require("sequelize");

module.exports = {
    insertRecordS(input){
        console.log("dllmmmmmmmmmmmmmm")
        console.log(input[0])
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
                offset: page*perPage,
                order:['id']
            }
        )
        .then( response=>{
            return response
        })
       
    },

    getSpecific(input){
        return models.kmb
        .findAll(
            {
                where:{
                    id:input.id,
                    路線:input.route,
                    路線所屬公司: input.company
                }
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
                    {備註: input},
                    {可挑戰:input},
                    {聯營:input},

                ]
            }
        }
        )
        .then(response=>{
            return response;
        })
    },



    getDataFromServer(){
        console.log("i am cruuently in getDataFromServerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr function========================================")
        return models.kmb
        .findAll({
            order:['id']
        })
        .then(response=>{
            return response;
        })
    },

    deleteAll(){
        return models.kmb
        .destroy({
            truncate:true
        })
        .then(
            resp=>{
                return resp
            }
        )
    },

    updateRecord(input){
        let state=""
        if(input.開始時間 !=""  &&  input.結束時間 !="")
            state= "完成"
        else
            state= "未完成"

        return models.kmb
        .update(
            {
                完成挑戰: state,
                開始時間:input.startTime,
                結束時間:input.endTime, 
                總行程時間:input.total,
                Instagram記錄連結:input.igLink,
                備註:input.remake,
            }
        ,
        {
            where:{
                id: input.target.id,
                路線所屬公司 : input.target.路線所屬公司,
                路線: input.target.路線
            }
        }
        ).then(respFromServer=>{
            console.log("I just finish the update function and here is the response ! ")
            console.log(respFromServer)
            return respFromServer
        })


        
    }
}