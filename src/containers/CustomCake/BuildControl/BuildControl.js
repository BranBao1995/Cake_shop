import React from 'react';

import classes from './BuildControl.css';


const buildControl = (props) => {


    return (

        <button className={classes.button} onClick={props.clicked}>{props.description}</button>

    );


};

export default buildControl;