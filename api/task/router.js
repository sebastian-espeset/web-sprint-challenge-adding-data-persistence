// build your `/api/tasks` router here
const express = require("express");
const Tasks = require('./model');
const router = express.Router();

router.get('/', async (req,res)=>{
    try{
        const data = await Tasks.get()
        data.map(task=>{
            if(task.task_completed===0){
                return task.task_completed = false
            } else{
                return task.task_completed = true
            }
        })
        res.status(200).json(data)
    }catch(error){
        res.status(400).json(error.message)
    }
})
router.post('/', async (req,res)=>{
    try{
        const task = req.body;
        const data = await Tasks.createTask(task)
        res.status(200).json(data)
    }catch(error){
        res.status(400).json(error.message)
    }
})
module.exports= router;
