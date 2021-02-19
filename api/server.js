
const express = require("express");
const server = express();
const ProjectsRouter = require('./project/router')
server.use(express.json());

server.use('/api/projects', ProjectsRouter)
server.get('/',(req,res)=>{
    res.status(200).json("hello bubblegum")
})

module.exports=server;