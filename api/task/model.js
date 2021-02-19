// build your `Task` model here
const db = require("../../data/dbConfig.js")

const get = () =>{
    return db("tasks")
}
const createTask = (newTask)=>{
    return db("tasks").insert(newTask)
        .then(([id])=>{
            return db("tasks").where("task_id",id).first();
        })
}

module.exports={
    get,
    createTask
}