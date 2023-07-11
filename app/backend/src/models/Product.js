const mongoose = require('mongoose');
const schema = mongoose.Schema;

const ProductSchema = new schema({
    // unique product id
    _id:{
        type: schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    // vendor id
    _vendor_id:{
        type: schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    // product name
    product_name: {
        type: String,
        required: true,
    },
    // product description
    product_description: {
        type: String,
        required: true,
    },
    // product price
    product_price: {
        type: Number,
        required: true,
    },
    // product image
    product_image: {
        type: String,
        required: true,
    },
    // product category
    product_category: {
        type: String,
        required: true,
    },
    // product quantity
    product_quantity: {
        type: Number,
        required: true,
    },
    // product status
    status: {
        type: Boolean,
        default: true,
    },
    validade: {
        type: Date,
        required: true,
    }
}, { timestamps: true });

module.exports =  Product = mongoose.model('Product', ProductSchema);