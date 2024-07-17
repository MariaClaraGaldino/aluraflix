import React from "react";
import './Header.css';


export default ({black}) => {
    return (

      <header className={black ? 'black' : ''}>
        <div className="header--logo">
            <a href="/">
                <img src="/img/Logo.png" alt="AluraFlix" />
            </a>
        </div>
        <div className="header--user">
            <a href="/">
                <img src="/img/netflix-avatar.png" alt="Usuário" />
            </a>
        </div>
    </header>  

    )    
}
