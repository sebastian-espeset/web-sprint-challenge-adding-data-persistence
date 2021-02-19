// build your `Project` model here
const db = require("../../data/dbConfig.js")

const get = () =>{
    return db("projects")
}

module.exports={
    get
}