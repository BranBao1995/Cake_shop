import React from 'react';

import classes from './Detail.css';
import cakePic from '../../assets/images/cake_1.jpg';

const detail = (props) => {



    return (

        <div 
            className={classes.detail} 
            style={{visibility: props.show ? 'visible' : 'hidden',
                    opacity: props.show ? '1' : '0',
                    transition: "all .2s"}}
            >


            <div className={classes.detail__info}>

                <div className={classes.detail__info__text}>
                    <h1>{props.cakeName}</h1>
                    <h3>ingredients: {props.ingredients}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque pellentesque lacus vitae ipsum imperdiet ullamcorper.
                        Proin finibus nisl purus, non molestie augue sollicitudin nec. Cras non condimentum libero.
                    Phasellus gravida fermentum justo, sed posuere nisi elementum vel.</p>
                </div>

                <div className={classes.detail__info__img}>

                    <img className={classes.img} src={cakePic}></img>
                    <button className={classes.button}  onClick={props.clicked}>OK</button>

                </div>                

            </div>


        </div>

    )


};


export default detail;