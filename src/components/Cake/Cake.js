import React from 'react';

import classes from './Cake.css';
import Cake_1 from '../../assets/images/cake_1.jpg';


const cake = (props) => {

    return (

            
            <div className={classes.cake} onClick={props.clicked}>

                <img className={classes.cakePic} src={Cake_1} alt="Cake Image"></img>
                <h3 className={classes.cakeTitle}>{props.cakeName}</h3>
                <p className={classes.cakePrice}>$: {props.price}</p>

            </div>
    )


}


export default cake;