const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
    category : {
        type : String,
        required : true
    },
    p_name : {
        type : String,
        required : true
    },
    p_image : {
        type : String,
    },
    brand : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    style : {
        type : String,
        required : true
    },
    quantity : {
        type : String,
        required : true
    }
})

// Now we will create a new collection 

const Shoe = new mongoose.model("Shoe",shoeSchema);

module.exports = Shoe;
