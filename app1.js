import express from 'express'
import path from 'path'



const app=express();
const staticpath=path.join(import.meta.dirname,"public");
app.use(express.static(staticpath));

app.get("/",(req,res)=>{
    // const __fileName=new URL(import.meta.url).pathname;
    // console.log(__fileName);
    const homepagepath=path.join(import.meta.dirname,"public","index.html");

    res.sendFile(homepagepath);
 })


// app.get("/about",(req,res)=> res.send("<h1>this page is about </h1>"))
 const PORT=3000;
app.listen(PORT,()=>{
    console.log(`server is running at port${PORT}`);
})