import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Showphotographer from '../Showphotographer/Showphotographer';
import './Photographer.css'

const Photographer = () => {
    const [items, setItems] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./photography.json')
            .then(response => response.json())
            .then(data => setItems(data))
    }, [])

    const handleCart = (item) => {
        for (const singlemember of cart) {
            if (singlemember === item) {
                setCart([...cart]);
                return;
            }
        }
        setCart([...cart, item]);
    }
    return (
        <div className='photographer'>
            <div className='photographer-container'>
                {
                    items.map(item => <Showphotographer
                        key={item.name}
                        handleCart={handleCart}
                        item={item}>
                    </Showphotographer>)
                }
            </div>
            <div className='cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>

    );
};

export default Photographer;