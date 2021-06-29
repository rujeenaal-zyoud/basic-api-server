'use strirct';



// uuid create random id for each request 
const uuid =require('uuid').v4;



// Use models and schemas to perform CRUD operations

class Food {
    constructor()
    {
    // initializing in memory db
    this.db =[];
    //it will show like :
    //  [{id,data:{name,role}}]
}
read (id){
if (id){
    return this.db.find((food)=> food.id ===id)
}
else{
    return this.db;
}
}
 /**
   *
   * @param {*} obj = {name:string,role:string}
   */


// in create we will  create the object into memoray
craete(obj){
    //create array object
const food={
id:uuid(),
data:{
    name :obj.name,
    type : obj.type,
}
};
//push the new object into db
this.db.push(food);
return food;
}



update(id,obj){
    //looping threw dataBase to detrmine the id 
for (let i=0; i<this.db.length ; i++){
if(this.db[i].id === id){
    //put new obj in that id to updated
   this .db[i].data =obj ; 
   return this.db[i]
}
}
}


delete(id){
this.db = this.db.filter((food)=>
    food.id !== id
)
return this.db;

}
}


module.exports = Food;