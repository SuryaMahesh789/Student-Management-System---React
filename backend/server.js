const express = require("express")
const cors= require("cors")
const mongoose = require("mongoose")
const model=require('./model')

const app = express()
app.use(express.json())

app.use(cors([]))

mongoose.connect("mongodb://0.0.0.0:27017").then(()=>{console.log("Database Connected...")}).catch((err)=>{console.log("Error Found in Connection "+err)})

app.get("/",async (req,res)=>{

    const val= await model.find()

    res.status(200).json(val)

})

app.get("/:name",async (req,res)=>{
    console.log(req.params.name+" Found...")
    const val = await model.find({name:req.params.name})
    console.log(val)
    res.status(200).json(val)
})

app.get("/searchbyemail/:email", async (req,res)=>{
    console.log(req.params.email)
    const val = await model.find({email:req.params.email})
    console.log(val)
    res.status(200).json(val)
})


app.post("/add",async (req,res)=>{
    console.log(req.body)

    await model.collection.insertOne(req.body.data).catch((err)=>{console.log("Found Error in Insertion from post method "+err)})

    res.send("DONE")

})

app.put("/put/:name", async (req,res)=>{
    console.log(req.params.name);
    console.log(req.body.data);

    try{
        let record= await model.updateOne({name:req.params.name},{$set:req.body.data})
        console.log(record)
    }
    catch(err)
    {
        console.log(err);
    }
    res.send("DONE")

})


app.delete("/delete/:name", async (req,res)=>{
    console.log(req.params.name)

   await model.deleteOne({name:req.params.name}).catch((err)=>{console.log("Error in Deletion "+err)})

    res.send("DONE")
})


app.delete("/deletebyemail/:email",async (req,res)=>{
    console.log(req.params.email)

    await model.deleteOne({email:req.params.email}).catch((err)=>{console.log("Error in Deletion By Email "+err)})

    res.send("DONE")
})


app.listen(4000,()=>console.log("Server Listening at port 4000"))