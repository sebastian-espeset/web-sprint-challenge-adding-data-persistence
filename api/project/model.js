// build your `Project` model here
const db = require("../../data/dbConfig.js")

const get = () =>{
    return db("projects")
}
const createProject = (newProject)=>{
    return db("projects").insert(newProject)
        .then(([id])=>{
            return db("projects").where("project_id",id).first();
        })
}

module.exports={
    get,
    createProject
}
