// build your `/api/resources` router here
const express = require("express");
const Resources = require('./model');
const router = express.Router();

router.get('/', async (req,res)=>{
    try{
        const data = await Resources.get()
        res.status(200).json(data)
    }catch(error){
        res.status(400).json(error.message)
    }
})
router.post('/', async (req,res)=>{
    try{
        const resource = req.body;
        const data = await Resources.createResource(resource)
        res.status(200).json(data)
    }catch(error){
        res.status(400).json(error.message)
    }
})
module.exports= router;
