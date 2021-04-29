const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const Cards = require('./tindercards')
//App config

const app  = express();
const PORT = process.env.PORT||8001;
const connectionURL = 'mongodb+srv://ADMIN:Jesus4Me!@cluster0.dlqws.mongodb.net/TinderDB?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(cors());
//DB config
mongoose.connect(connectionURL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

//Api Endpoints

app.get('/',(req,res)=>{
    res.status(200).send('Hello World')
})

app.post('/tindercards',(req,res)=>{
    const dbCard = req.body;
    Cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/tindercards',(req,res)=>{
    Cards.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})

//Listener
app.listen(PORT,()=>console.log(`Listening to Port,${PORT}`))