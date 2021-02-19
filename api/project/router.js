// build your `/api/projects` router here

const express = require("express");
const Projects = require('./model');
const router = express.Router();

router.get('/', async (req,res)=>{
    try{
        const data = await Projects.get()
        res.status(200).json(data)
    }catch(error){
        res.status(400).json(error.message)
    }
})
router.post('/', async (req,res)=>{
    try{
        const project = req.body;
        const data = await Projects.createProject(project)
        res.status(200).json(data)
    }catch(error){
        res.status(400).json(error.message)
    }
})
module.exports= router;
