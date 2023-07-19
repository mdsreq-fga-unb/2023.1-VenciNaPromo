const router = require("express").Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/User');
const Order = require('../models/Order')
const Product = require('../models/Product')

const makecode = require('../utils/makecode');
const checkToken = require('../utils/tokenquery');

router.post('/finish_order', (req, res) => {
    //receives list of products
    const { products } = req.body;

    //find user
    const token = req.headers['authorization'].split(' ')[1]
    checkToken(token, res, async (decoded) => {
        User.findById(decoded.id).then(user => {
            //create order

            //generate random 8 digit code
            const order = new Order({
                _user_id: user._id,
                products: products,
                status: true,
                code: makecode(8),
            });

            //save order
            order.save().then(order => {
                return res.status(200).json({ message: 'ok', order: order });
            }).catch(err => {
                return res.status(500).json({ message: 'Internal server errors' });
            });
        }).catch(err => {
            return res.status(500).json({ message: 'Internal server errors' });
        });
    });
});

router.get('/get_orders', (req, res) => {
    //find user
    const token = req.headers['authorization'].split(' ')[1]
    checkToken(token, res, async (decoded) => {
        User.findById(decoded.id).then(user => {
            //user is store
            if (user.user_flag == 1) {
                //find all orders of his products
                Order.find({ products: { $elemMatch: { _vendor_id: user._id } } }).then(async orders => {
                    //gets full product info and buyer info, then adds to product object
                    for (let i = 0; i < orders.length; i++) {
                        //gets full product info and seller info, then adds to product object
                        const promises = orders[i].products.map(product => {
                            return Product.findById(product._id).then(async product => {
                                product._vendor_id = await User.findById(product._vendor_id);
                                return product;
                            });
                        });

                        orders[i].products = await Promise.all(promises);
                    }

                    return res.status(200).json({ message: 'ok', orders: orders });
                }).catch(err => {
                    return res.status(500).json({ message: 'Internal server errors' });
                });
            }
            //user is client
            else if (user.user_flag == 0) {
                //find all orders 
                Order.find({ _user_id: user._id }).then(async orders => {
                    for (let i = 0; i < orders.length; i++) {
                        //gets full product info and seller info, then adds to product object
                        const promises = orders[i].products.map(product => {
                            return Product.findById(product._id).then(async product => {
                                product._vendor_id = await User.findById(product._vendor_id);
                                return product;
                            });
                        });

                        orders[i].products = await Promise.all(promises);
                    }

                    return res.status(200).json({ message: 'ok', orders: orders });
                }).catch(err => {
                    console.log(err)
                    return res.status(500).json({ message: err });
                });
            }
        }).catch(err => {
            return res.status(500).json({ message: 'Internal server errors' });
        });
    });
});
             


module.exports = router;