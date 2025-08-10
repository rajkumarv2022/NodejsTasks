const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
{
    name:{
        type:String,
        require:[true,'name must be prvided']
    },

    price:{
        type:Number,
        required:[true,'price must be entered']
    },

    ratting:{
        type:Number,
        default:4.5
    },
    company:{
        type:String,
        enum:{
            values:['com1','com2'],
            message:'{VALUE} not supported'
        }
    }
}
);

module.exports = mongoose.model('ProductModel',productSchema);