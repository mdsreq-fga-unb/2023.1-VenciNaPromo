import axios from 'axios';

export const saveProductInCart = (props) => {
    //reads localstorage, adds product to cart, and saves it back to localstorage
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart === null) {
        cart = [];
    }
    cart.push(props);
    localStorage.setItem('cart', JSON.stringify(cart));

    // console.log(props.quantity);
    console.log(cart);

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

export const updateProductQuantityInCart = (productId, quantity) => {
    let cart = getCart();
    if (cart) {
        const updatedCart = cart.map((product) => {
            if (product._id === productId) {
                return {
                    ...product,
                    quantity: quantity
                };
            }
            return product;
        });
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
};


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

let checkoutData = null;

export const getCheckoutTotal = () => checkoutData;

const BASE_URL = process.env.REACT_APP_API_URL;

export const checkout = async (cart) => {
    //sends cart to backend and returns a coupon
    // let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
        const token = localStorage.getItem('token');
        await fetch(BASE_URL + "/order/finish_order/", {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
            body: JSON.stringify({
                products: cart
            })
        })
            .then(response => { return response.json() })
            .then(data => {
                checkoutData = data.order;

                // console.log(cart);

                cart.forEach(product => {
                    updateProductQuantity(product._id, product.product_quantity - product.quantity);
                });

                return checkoutData;
            });
    }
    return null;
}


export const updateProductQuantity = async (productId, newQuantity) => {
    try {
        console.log(productId);
        console.log(newQuantity);

        const response = await fetch(BASE_URL + `/product_list/update_product/${productId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
            body: JSON.stringify({ product_quantity: newQuantity })
        });

        if (!response.ok) {
            throw new Error('Error updating product quantity');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw new Error('Error updating product quantity');
    }
};

let ordersData = null;

export const getOrdersData = () => ordersData;

export const getOrders = async () => {
    //returns user orders
    const token = localStorage.getItem('token');
    if (token) {
        await fetch(BASE_URL + "/order/get_orders/", {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            },
        })
            .then(response => { return response.json() })
            .then(data => {
                ordersData = data.orders;
                return ordersData;
            });
    }
    return null;
}