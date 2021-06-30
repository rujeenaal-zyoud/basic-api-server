'use strict';
//HERE WE WILL CREATE THE REQUEST FOR CRUD using RESTAPI 
const express =require ('express');
const Clothes = require('../models/clothes.js');
const validator = require('../middleware/validator')
const router = express.Router();
//Clothes here that in model class that we create
const clothes = new Clothes;


//create requests
router.get('/',getClothes);
router.get('/:id',getClothes);
 router.post('/',validator,createClothes);
 router.put('/:id',validator,updatClothes);
 router.delete('/:id',deleteClothes);


function getClothes(req,res){
    const resObj = clothes.read(req.params.id);
    res.json(resObj);
}

function createClothes(req,res){
    const resObj =clothes.craete(req.body);
    res.status(201).json(resObj)
}


function updatClothes (req,res){
    //we give the function parametre as the model we have create
    const resObj =clothes.update(req.params.id ,req.body);
    res.json(resObj);
}


function deleteClothes (req,res){
    //we give the function parametre as the model we have create
    const resObj =clothes.delete(req.params.id);
    res.json(resObj);
}

module.exports = router;


