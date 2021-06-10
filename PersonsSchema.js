
//scheme for person info

const mongoose=require('mongoose')

const PersonsSchema = mongoose.Schema({
    Name : {
        type : String,
        required : true
    },
    Age : {
        type : String,
        required : true
    },
    CreatedDate : {
        type : Date,
        default : Date.now
    }
})


module.exports=mongoose.model('Persons',PersonsSchema)