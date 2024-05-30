const express = require("express");
require("./db/conn");
require('dotenv').config();
const Shoe = require("./model/shoe");
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

// post data 

app.post("/shoes/post-shoe", async(req,res) => {
    try {
        const shoeDetails = new Shoe(req.body);
        const createShoeDetails= await shoeDetails.save();
        res.status(201).send(createShoeDetails);
    } catch (error) {
        res.status(400).send(error);
    }
})

// get data 

app.get("/shoes/get-shoes", async(req,res) => {
    try{
        const shoesList = await Shoe.find();
        res.send(shoesList);
    }catch(e){
        res.send(e);
    }
})

// get individual data 

app.get("/shoes/get-shoe/:id", async(req,res) => {
    try {
        const _id = req.params.id;
        const shoeList= await Shoe.findById({_id : _id});
        res.send(shoeList);
    } catch (error) {
        
    }
})

// update the data

app.patch("/shoes/patch-shoe/:id", async (req,res) => {
    try{
        const _id = req.params.id;
        const updateShoe = await Shoe.findByIdAndUpdate({_id:_id},req.body,{
            new:true
        });
        res.send(updateShoe);
    }catch(e){
        res.status(400).send();
    }
})

// delete the data 

app.delete("/shoes/delete-shoe/:id", async(req,res) => {
    try{
        const _id = req.params.id;
        const deleteShoe = await Shoe.findByIdAndDelete({_id:_id});
        res.send(deleteShoe);
    }catch(e){
        res.status(500).send();
    }
})

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});