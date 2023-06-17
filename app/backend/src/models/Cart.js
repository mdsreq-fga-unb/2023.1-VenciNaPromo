const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CartSchema = new schema({
    // unique cart id
    _id:{
        type: schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    // user id
    _user_id:{
        type: schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    // product id
    _product_id:{
        type: schema.Types.ObjectId,
        required: true,
        ref: 'Product',
    },
    // product quantity
    product_quantity: {
        type: Number,
        required: true,
    },
    // cupom id
    _cupom_id:{
        type: schema.Types.ObjectId,
        required: true,
        ref: 'Cupom',
    },
    // cart status
    status: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true });

module.exports = Cart = mongoose.model('Cart', CartSchema);