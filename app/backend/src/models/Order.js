const mongoose = require('mongoose');
const schema = mongoose.Schema;

const OrderSchema = new schema({
    // unique order id
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
    // products
    products: [{
        type: schema.Types.ObjectId,
        required: true,
        ref: 'Product',
    }],
    // order status
    status: {
        type: Boolean,
        required: true,
    },
    // order code
    code: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = Order = mongoose.model('Order', OrderSchema);