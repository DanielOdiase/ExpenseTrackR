
const mongoose =require('mongoose')
const TransactionSchema =new mongoose.Schema({
    amount: {
        type: Number,
        trim:true,
        required: [true, 'Please add a value']
    },
    type:{
        type:String,
        trim:true,
        required:[true,'Please enter a type ']
    },
   category:{
       type:String,
       trim:true,
       required:[true,'Please enter a category']
   },
   date:{
       type: String,
       default:Date,
       required:[true,'Please enter a Date']
   }

})

module.exports = mongoose.model('Transaction',TransactionSchema)