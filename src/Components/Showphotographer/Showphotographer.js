import React from 'react';
import './Showphotographer.css'

const Showphotographer = (props) => {
    const { name, circle, img, born, living, salary } = props.item;
    return (
        <div className='show-photographer'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Born: {born}</p>
            <p>Circle: {circle}</p>
            <p>Living: {living}</p>
            <p>Salary: ${salary}</p>
            <button onClick={() => props.handleCart(props.item)}
                className='regula-btn'>
                <i className="fas fa-shopping-cart">
                </i> Add to cart</button>
            <div className='social-icon'>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter"></i>
            </div>
        </div>
    );
};

export default Showphotographer;