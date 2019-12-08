import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Nav.css';


const nav = (props) => {


    return (

        <nav className={classes.nav}>

            <a href="/" className={classes.Logo}>Cake Shop</a>

            <ul>

                <li><NavLink to={"/" + props.destination}>{props.destination}</NavLink></li>
                <li><NavLink to="/Order">Order</NavLink></li>

            </ul>

        </nav>

    )

}

export default nav;