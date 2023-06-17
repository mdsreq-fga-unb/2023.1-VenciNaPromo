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
    // cart id
    _cart_id:{
        type: schema.Types.ObjectId,
        required: true,
        ref: 'Cart',
    },
    // order status
    status: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true });

module.exports = Order = mongoose.model('Order', OrderSchema);