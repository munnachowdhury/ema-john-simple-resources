import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';


const Product = (props) => {
    // console.log(props.product.key)
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="product-img">
                {
                    <img src={img} alt=""/>
                }
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4>
                <br/>
                <p>By: {seller}</p>
                <p><small>Price: ${price}</small></p>
                <p>Only {stock} left in stock - Order soon</p>
                <button className='buy-button' onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart}/> Buy now</button>
            </div>
        </div>
    );
};

export default Product;