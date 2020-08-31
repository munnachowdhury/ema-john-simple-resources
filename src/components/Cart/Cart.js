import React from 'react';
import './Cart.css'
import Product from '../Products/Product';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price, 0);

    // let total = 0;
    // for(let i=0; i<cart.length; i++){
    //     const product = cart[i];
    //     total = total + product.price;
    // }

    let shipping = 0;
    if (total>40){
        shipping = 0;
    }
    else if (total>15){
        shipping = 5;
    }
    else if (total>0){
        shipping = 10;
    }

    const tax = total / 10;

    function convertNumber (num){
        const newNumber = num.toFixed(2);
        return Number(newNumber);
    }

    return (
        <div>
            <h1>This is cart...</h1>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {convertNumber(total)}</p>
            <p>Tax: {convertNumber(tax)}</p>
            <p>Shipping Cost: {shipping}</p>
            <p>Total Price: {convertNumber(total + shipping + tax)}</p>
        </div>
    );
};

export default Cart;