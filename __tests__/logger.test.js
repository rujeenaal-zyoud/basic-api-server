'use strict';
const server=require('../src/server.js');
const supertest=require('supertest');
const request=supertest(server.app);



describe('basic-api-server', ()=>{
  let id;

  it('create a new clothes using POST', async ()=>{

    let clothes={
      name: 'shirt',
      type: 'red',
    };
 
    
    const response=await request.post('/api/v1/clothes').send(clothes);
  
    //assert
    expect(response.status).toEqual(201);
    expect(response.body.data.name).toEqual('shirt');
    expect(response.body.data.type).toEqual('red');
    expect(response.body.id.length).toBeGreaterThan(0);
    id = response.body.id;
  });
  it(' read the all clothes using GET',async()=>{
    const response =await request.get('/api/v1/clothes');
    expect(Array.isArray(response.body)).toBeTruthy();
   
  });

  it('should read a record using GET', async ()=>{
    const response =await request.get(`/api/v1/clothes/${id}`);
    expect(response.body.data.name).toEqual('shirt');
  } );
  it('Update a data  by id using PUT', async () => {
    let editClothes={
      name: 'shirt',
      type: 'black',
    };
    const response = await request.put(`/api/v1/clothes/${id}`)
      .send(editClothes);
    expect(response.status).toEqual(200);
    expect(response.body.data.type).toEqual('black');
  });

  it(' delete data by id using DELETE', async () => {

    const response = await request.delete(`/api/v1/clothes/${id}`);

    expect(response.status).toEqual(200);

    
  });

});


describe('basic-api-server', ()=>{
  let id;
  it('create a new food using POST', async ()=>{

    let food={
      name: 'orange',
      type: 'fruit',
    };
 
    const response=await request.post('/api/v1/food').send(food);
   
    expect(response.status).toEqual(201);
    expect(response.body.data.name).toEqual('orange');
    expect(response.body.data.type).toEqual('fruit');
    expect(response.body.id.length).toBeGreaterThan(0);
    id = response.body.id;
  });

  it(' read the all foods using GET',async()=>{
    const response =await request.get('/api/v1/food');
    expect(Array.isArray(response.body)).toBeTruthy();
   
  });

  it(' read a food by id  using GET', async ()=>{
    const response =await request.get(`/api/v1/food/${id}`);
    expect(response.body.data.name).toEqual('orange');
    //expect(response.body.data.type).toEqual('fruit');
  } );
  it('Update  data food using PUT', async () => {
    let editFood={
      name: 'strubbery',
      type: 'fruit',
    };
    const response = await request.put(`/api/v1/food/${id}`)
      .send(editFood);
    expect(response.status).toEqual(200);
    expect(response.body.data.name).toEqual('strubbery');
    expect(response.body.data.type).toEqual('fruit');

  });
  it('delete  a data by id  using DELETE', async () => {
  
    const response = await request.delete(`/api/v1/food/${id}`);

    expect(response.status).toEqual(200);

    
  });

});