import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../Product/Product.css';

const Product = (props) => {
    console.log(props.product);
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="productName">{name}</h4>
                <p><small>by: {seller}</small></p>
                <br/>
                <p> <strong>${price}</strong></p>
                <br/>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className="btn"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;