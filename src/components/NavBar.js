import React from 'react';

import "./NavBar.css"


export default function Header(props) {
    return (
        <div>
            <div className="home" onClick={() => props.home('home')}>Home</div>
            <div className="favorites" onClick={() => props.favorites('deck')}>Deck</div>
        </div>
    )
}
