'use strict';
//HERE WE WILL CREATE THE REQUEST FOR CRUD using RESTAPI 
const express =require ('express');
const Food = require('../models/food.js');
const validator = require('../middleware/validator')
const router = express.Router();
//foods here that in model class that we create
const foods = new Food;


//create requests
router.get('/',getfoods);
router.get('/:id',getfoods);
 router.post('/',validator,createfoods);
 router.put('/:id',validator,updatfoods);
 router.delete('/:id',deletefoods);


function getfoods(req,res){
    const resObj = foods.read(req.params.id);
    res.json(resObj);
}

function createfoods(req,res){
    const resObj =foods.craete(req.body);
    res.status(201).json(resObj)
}


function updatfoods (req,res){
    //we give the function parametre as the model we have create
    const resObj =foods.update(req.params.id ,req.body);
    res.json(resObj);
}


function deletefoods (req,res){
    //we give the function parametre as the model we have create
    const resObj =foods.delete(req.params.id);
    res.json(resObj);
}

module.exports = router;


