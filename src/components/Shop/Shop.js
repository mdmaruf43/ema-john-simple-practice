import React, { useState } from 'react';
import fakeData from '../../fakeData';
import '../Shop/Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    return (
        <div className="container">
            <div className="product-container">
                    {
                        products.map(product => <Product product={product}>{product.name}</Product>)
                    }
            </div>
            <div className="cart-container">
                <h2>This is Cart Portion</h2>
            </div>
        </div>
    );
};

export default Shop;