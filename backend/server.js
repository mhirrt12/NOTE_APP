const express= require("express");
const app=express();
const cors= require("cors");
let notes=[];
let id=0;
app.use(express.json());
app.use(cors());
app.post("/notes",(req,res)=>{
   let newNote={
    id:id++,
    note: req.body.note,
   }
   notes.push(newNote);
   res.json(notes);
})
app.get("/notes",(req,res)=>{
    res.json(notes);
})
app.listen(3000,()=>{
    console.log("i'm listing on port 3000");
});