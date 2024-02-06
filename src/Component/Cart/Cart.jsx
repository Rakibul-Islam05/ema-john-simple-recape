import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    //cost cart = props.cart;
    // const {cart} = props;

    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice*5/100;
    const grandTotal = totalPrice + totalShipping+tax;
    

    return (
        <div className='cart'>
            <h2>Order summary</h2>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;