import React from 'react';
import logo from '../../logo.svg';
import './index.css';

const Index: React.FC = () => {
    return (
        <div className='headerWrapper'>
            <div className='header'>
                <img src={logo} className='logo' alt={'logo'}/>
                <div className='title'>Free & Fast URL Shortener</div>
            </div>
        </div>
    )
}

export default Index;
