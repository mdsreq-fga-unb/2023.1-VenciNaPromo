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


        //   <img src="https://www.omanahprodutosnaturais.com.br/image/cache/catalog/feijao%20vermelho-800x800.jpg" alt="Imagem do Produto 1" />
        //   <h3>Feijãozinho</h3>
        //   <p>Feijãozinho gostosinho</p>
        //   <p>Preço: R$ 149,99</p>
        //   <button className="product-in-list-button" onClick={togglePopup}>
        //       <span className="plus-icon"></span>
        //   </button>

        //   {showPopup && (
        //       <div className="popup">
        //       <div className="popup-content">
        //         <div className="product-detail-container">
        //             <div className="product-detail">
        //                 <img src="https://www.omanahprodutosnaturais.com.br/image/cache/catalog/feijao%20vermelho-800x800.jpg" alt="Imagem do Produto 1" />
        //                 <div className="product-detail-title">Feijãozinho</div>
        //                 <div className="product-detail-text-box">
        //                     <div className="product-detail-store">Loja tal - Águas Claras</div>
        //                     <div className="product-detail-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin elementum fringilla lectus at rutrum. Quisque maximus metus vitae risus rutrum, ut ullamcorper ipsum aliquam. Nunc ut velit dignissim, consequat mauris ut, tristique purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam semper vestibulum fermentum. Aenean in fermentum enim. Nullam et pharetra ligula. Vivamus eu libero ut felis ullamcorper malesuada. Nullam ullamcorper odio et eleifend tristique.</div>
        //                     <div className="product-detail-quantity">Quantidade disponível: 5</div>
        //                 </div>
        //                 <div className="product-detail-price">R$ 149,99</div>
        //                 <div className="product-detail-button">Adicionar</div>
        //             </div>
        //           </div>
        //           <button className="product-in-list-button" onClick={togglePopup}></button>
        //       </div>
        //       </div>
        //   )}