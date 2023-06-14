const mongoose = require('mongoose');
const schema = mongoose.Schema;

const CupomSchema = new schema({
    // unique cupom id
    _id:{
        type: schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    // product id
    _product_id:{
        type: schema.Types.ObjectId,
        required: true,
        ref: 'Product',
    },
    // cupom name
    description: {
        type: String,
        required: true,
    },
    // cupom discount in percentage
    discount: {
        type: Number,
        required: true,
    },
    // cupom status
    status: {
        type: Boolean,
        required: true,
    }
}, { timestamps: true });

module.exports = Cupom = mongoose.model('Cupom', CupomSchema);