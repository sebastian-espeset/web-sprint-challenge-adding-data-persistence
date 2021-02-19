
const express = require("express");
const server = express();
const ProjectsRouter = require('./project/router')
const ResourcesRouter = require('./resource/router')
const TasksRouter = require('./task/router')
server.use(express.json());

server.use('/api/projects', ProjectsRouter)
server.use('/api/resources', ResourcesRouter)
server.use('/api/tasks', TasksRouter)
server.get('/',(req,res)=>{
    res.status(200).json("hello bubblegum")
})

module.exports=server;