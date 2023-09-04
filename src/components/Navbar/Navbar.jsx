import React, { useState } from "react";
import styles from './style.module.css';
import logo from '../../assets/pokeball.png';
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar d-flex justify-content-between p-3 bg-gray w-100">
            <Link to="/" className={`d-flex p-3 justify-content-between align-items-center`}>
                <img src={logo} alt="Pokeball" className={`${styles.logo}`} />
                <h3>Pokedex</h3>
            </Link>
        </div>
    )
}