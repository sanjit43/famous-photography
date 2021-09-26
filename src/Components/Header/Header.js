import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-section'>
            <div>
                <h2 className='main-title'>Build Your Own Photography Team</h2>
                <h3>Your Estimated Budget is 50000</h3>
            </div>
            <div className='navigation'>
                <nav>
                    <a href="/work">The Work</a>
                    <a href="/publications">Publications</a>
                    <a href="/exhibition">Exhibition</a>
                    <a href="/about">About</a>
                </nav>
                <input type="text" placeholder='Search your favorate' />
            </div>

        </div>

    );
};

export default Header;