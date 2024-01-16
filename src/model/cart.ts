import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
    ProductTitle: { type: String, required: true },
    
    ProductDescription: {
        type: String, required: true 
    },
    quantity:{
        type: Number, required: true, default: 1
    },
    size:{
        type: String,
        enum: ['S', 'M','L', 'XL', 'XXL'],
        default: 'active',
    },
    available:{
        type: String,
        enum: ['Yes', 'No']
    },
    color:{
        type: String,
    }
})

export const CartModel = mongoose.model('cart', CartSchema);

