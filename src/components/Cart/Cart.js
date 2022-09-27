import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    let shipping = 0;
    for(const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = Number((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);

    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <ol>
                <li>Selected Item: {cart.length}</li>
                <li>Total Price: ${total}</li>
                <li>Total Shipping: ${shipping}</li>
                <li>Tax: ${tax}</li>
            </ol><hr />
            <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;