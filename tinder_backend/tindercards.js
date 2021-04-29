const mongoose = require('mongoose')

const tinderSchema = mongoose.Schema({
    name:String,
    imgUrl:String
})

module.exports= mongoose.model('tinderCard',tinderSchema)