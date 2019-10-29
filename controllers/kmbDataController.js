const kmbDataRepos = require("../repositories/kmbDataRepos")


module.exports  ={
    postDataFunc:  (req, res)=>{
        const temp = req.body.kmbData;
        
        kmbDataRepos
        .insertRecordS(temp)
    }
    
}