const app = require("express")()

const PORT = process.env.PORT || 3000

app.get("",(req,res)=>{
    res.send("HELLO WORLD")

})
app.listen(PORT,()=>{
    console.log('App at port',PORT)

})