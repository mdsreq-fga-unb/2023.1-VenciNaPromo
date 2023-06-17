const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/get_list', (req, res) => {
    //checa tipo de usuario (flag)
    //retorna lista de produtos
    //vendedor: lista dos proprios produtos, disponiveis ou não (status)
    //visitante: lista com somente os produtos disponiveis de todos os vendedores
    //comprador: lista com somente os produtos disponiveis de todos os vendedores
});

router.post('/remove_product', (req, res) => {
    //vendedor consegue remover um produto da propria lista de produtos
});

module.exports = router;