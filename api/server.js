
const express = require("express");
const server = express();
const ProjectsRouter = require('./project/router')
const ResourceRouter = require('./resource/router')
server.use(express.json());

server.use('/api/projects', ProjectsRouter)
server.use('/api/resources', ResourceRouter)
server.get('/',(req,res)=>{
    res.status(200).json("hello bubblegum")
})

module.exports=server;