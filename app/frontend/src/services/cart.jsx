export const saveProductInCart = (props) => {
    //reads localstorage, adds product to cart, and saves it back to localstorage
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = [];
    }
    cart.push(props);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
};

export const removeProductFromCart = (props) => {
    //reads localstorage, removes product from cart, and saves it back to localstorage
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = [];
    }
    cart = cart.filter((product) => {
        return product._id !== props._id;
    }
    );
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
}

export const clearCart = () => {
    //removes cart from localstorage
    localStorage.removeItem('cart');
    window.location.reload();
}

export const getCart = () => {
    //returns cart from localstorage
    return JSON.parse(localStorage.getItem('cart'));
}

export const getCartTotal = () => {
    //returns cart total price
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = [];
    }
    let total = 0;
    cart.forEach((product) => {
        total += product.product_price;
    });
    return total;
}