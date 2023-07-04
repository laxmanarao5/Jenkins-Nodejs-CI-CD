const exp=require("express")

const app = exp()

app.get("/test",(req,res)=>{
    res.send({message:"Test API"})
})

app.get("/dev",(req,res)=>{
    res.send({message:"API added from dev branch"})
})

app.listen(80,()=>{
    console.log("Server started at 80");
})