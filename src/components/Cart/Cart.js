import React from 'react';
import '../Cart/Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99; 
    }
    const tax = total /10;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="cart">
            <h3>Order Sumery</h3>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: ${formatNumber(total)}</p>
            <p><small>Shipping: ${shipping}</small></p>
            <p>Estimate Tax: ${formatNumber(tax)}</p>
            <p className="priceColor">Total Price: ${formatNumber(total + shipping + tax)}</p>
            <button className="btn">Review your order</button>
        </div>
    );
};

export default Cart;