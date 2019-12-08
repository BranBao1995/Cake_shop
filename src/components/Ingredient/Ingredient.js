import React from 'react';

import classes from './Ingredient.css';
import eggBase from '../../assets/images/eggBase.png';
import kiwi from '../../assets/images/kiwi.png';
import chocolate from '../../assets/images/choco.png';
import jam from '../../assets/images/jam.png';
import strawberry from '../../assets/images/strawberry.png';
import matchaBase from '../../assets/images/matchaBase.png';

const ingredient = (props) => {


    let type = null;

    switch (props.type) {

        case ('chocolate') :
            type = 
                <div className={classes.chocolate} style={{marginBottom: '1.5rem'}}>
                    <img src={chocolate} alt="Chocolate Sauce"></img>
                </div>;
            break;
        
        case ('jam') :
            type = 
                <div className={classes.jam} style={{marginBottom: '1.5rem'}}>
                    <img src={jam} alt="Fruit Jam"></img>
                </div>;
            break;

        case ('kiwi') :
            type = 
                <div className={classes.kiwi} style={{marginBottom: '1.5rem'}}>
                    <img src={kiwi} alt="Kiwi"></img>
                </div>;
            break;

        case ('strawberry') :
            type = 
                <div className={classes.strawberry} style={{marginBottom: '1.5rem'}}>
                    <img src={strawberry} alt="Strawberry"></img>
                </div>;
            break;

        case ('egg-cake') :
            type = 
                <div className={classes.eggCake} style={{marginBottom: '1.5rem'}}>
                    <img src={eggBase} alt="Egg Base"></img>
                </div>;
            break;

        case ('matcha-cake') :
            type = 
                <div className={classes.matchaCake} style={{marginBottom: '1.5rem'}}>
                    <img src={matchaBase} alt="Matcha Base"></img>
                </div>;
            break;

        default: 
            type = null;

    }


    return type;


};


export default ingredient;