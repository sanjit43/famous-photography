import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const photographer of cart) {
        total = total + photographer.salary;
    }
    return (
        <div>
            <h2>Orderd: {props.cart.length}</h2>
            <h3>Total: ${total}</h3>
            <div>
                {
                    cart.map(name => <p key={name.born}>{name.name}</p>)
                }

            </div>
        </div>
    );
};

export default Cart;