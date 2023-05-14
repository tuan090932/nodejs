const mongoose = require('mongoose')
const productSchema = mongoose.Schema(
    {

        name: {
            type: String,
            require:[true,"pleas enter a prodcuct name"]

        },
        quantity: {
            type: Number,
            require: true,
            default:0
        },
        price: {
            type: Number,
            require:true,
            
        },
        Image: {
            type: String,
            require:false,
        }




    },
    {
        timestamps:true
    }
)

const product = mongoose.model('product', productSchema);
module.exports = product;