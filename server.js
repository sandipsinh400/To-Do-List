const express = require('express')
const app = express()

require('dotenv').config()
const PORT=process.env.PORT || 9001

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => res.send('postmen'))

var arr=[]

// app.post('/user',(req,res)=>{
//     console.log("postapi.........."); 
//     console.log(req.body);  
//     arr.push(req.body)
//     res.json("inserted")
// })

app.post('/user',(req,res)=>{
    const {Productname,category,ProductTitle,img}=req.body

    const newuser={
        Product_name:Productname,
        cate_gory:category,
        Products_title:ProductTitle,
        img_url:img,
        


    }
    
    console.log(newuser);
    arr.push(newuser)
    res.json({
        success:true,
        message:"your record has benn inserted"
    })
})

app.get('/user',(req,res)=>{
    // console.log("getapi.........."); 
    res.json(arr)
})

app.delete('/user/:index',(req,res)=>{
    // console.log(req.params.index);
    const {index}=req.params
    console.log(index);
    arr.splice(index,1)
    res.json({
        message:"data has been deleted"
    })   
})

app.put('/user',(req,res)=>{
    console.log(req.query);
  const {index}=req.query
  arr.splice(index,1,req.body)
  res.json({
    message:"data has been updated"
  })
})

app.listen(PORT, () => console.log(`Example app listening on port http://localhost:${PORT}`))