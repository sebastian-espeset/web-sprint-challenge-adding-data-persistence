// build your `Resource` model here
const db = require("../../data/dbConfig.js")

const get = () =>{
    return db("resources")
}
const createResource = (newResource)=>{
    return db("resources").insert(newResource)
        .then(([id])=>{
            return db("resources").where("resource_id",id).first();
        })
}

module.exports={
    get,
    createResource
}