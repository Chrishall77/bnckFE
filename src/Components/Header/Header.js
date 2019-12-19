import React from 'react';
import potato from '../../styling/assets/potato.svg';
import burger from '../../styling/assets/burger.svg';

const Header = ({ children }) => (
    <>
        <div className="banner">
            <div className="navLink"> <img src={potato} /> </div>
            <h1 className="bannerTitle"> { children }</h1>
            <div className="navBurger"> <img src={burger} /> </div>
        </div>
    </>
);

export default Header;
