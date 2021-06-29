//here will export the all 404 and the next is a callBack
'use strict';

module.exports =(err,req,res,next)=>{
    res.status(500).json(err);

};