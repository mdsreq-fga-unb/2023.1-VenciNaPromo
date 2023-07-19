const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const checkToken = require('../utils/tokenquery');
const User = require('../models/User');

router.get('/get_list', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    
    if (!token || token === 'null') {
      // visitante: lista com somente os produtos disponiveis de todos os vendedores
      Product.find({ status: 1 })
        .then(products => {
          return res.status(200).json({ message: 'ok visitante', products: products });
        })
        .catch(err => {
          return res.status(500).json({ message: 'Internal server error' });
        });
    } else {
        checkToken(token, res, async (decoded) => {
        User.findById(decoded.id)
          .then(user => {
            // checa tipo de usuario (flag)
            if (user.user_flag == 0) {
              // comprador: lista com somente os produtos disponiveis de todos os vendedores
              Product.find({ status: 1 })
                .then(products => {
                  return res.status(200).json({ message: 'ok comprador', products: products });
                })
                .catch(err => {
                  return res.status(500).json({ message: 'Internal server error' });
                });
            } else if (user.user_flag == 1) {
              // vendedor: lista dos proprios produtos, disponiveis ou não (status)
              Product.find({ _vendor_id: decoded.id })
                .then(products => {
                  return res.status(200).json({ message: 'ok vendedor', products: products });
                })
                .catch(err => {
                  return res.status(500).json({ message: 'Internal server error' });
                });
            }
          })
          .catch(err => {
            return res.status(500).json({ message: 'Internal server error' });
          });
      });
    }
  });
  

router.post('/remove_product', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1];
    const { product_id } = req.body;
    checkToken(token, res, async (decoded) => {
        User.findById(decoded.id)
          .then(user => {
            // checa tipo de usuario (flag)
            if (user.user_flag == 1) {
              // vendedor: remove produto pertencente aquele ve
              Product.findOneAndDelete({ _id: product_id, _vendor_id: decoded.id })
                .then(product => {
                  return res.status(200).json({ message: 'ok vendedor', product: product });
                }
                )
                .catch(err => {
                  return res.status(500).json({ message: 'Internal server error' });
                }
                );
            }
          })
          .catch(err => {
            return res.status(500).json({ message: 'Internal server error' });
          });
      }
    );
});

module.exports = router;