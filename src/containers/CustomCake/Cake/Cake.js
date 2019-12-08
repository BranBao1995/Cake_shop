import React from 'react';

import classes from './Cake.css';
import Ingredient from '../../../components/Ingredient/Ingredient';

const cake = (props) => {


    let ingredients = Object.keys(props.ingredients)
                .map(igkey => {

                    return (<Ingredient key={igkey} type={props.ingredients[igkey]} />)

                })


    return (

        <div className={classes.cake}>
            {ingredients}
        </div>

    );

};

export default cake;