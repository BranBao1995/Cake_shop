import React from 'react';

import classes from './Summary.css';


const summary = (props) => {


    let showSelection = false;

    if (props.baseName !== 'select a ') {
        showSelection = true;
    } else {
        showSelection = false;
    }
    // let sauceSelection = null;
    // let toppingSelection = null;
    // let baseSelection = null;

    // if (props.sauceName == 'Please ') {
    //     sauceSelection = null;
    // } else {
    //     sauceSelection = props.sauceName;
    // }

    // if (props.toppingName == 'base') {
    //     toppingSelection = null;
    // } else {
    //     toppingSelection = props.toppingName;
    // }

    // if (props.baseName == 'select a ') {
    //     baseSelection = null;
    // } else {
    //     baseSelection = props.baseName;
    // }

    return (

        <section className={classes.buildSummary} 
            style={{visibility: props.show ? 'visible' : 'hidden',
                    opacity: props.show ? '1' : '0',
                    transition: 'all 0.2s'}}>

            <div className={classes.summary}>

                <h2> {props.sauceName} {props.baseName} {props.toppingName} </h2>

                <div className={classes.selections} 
                    style={{visibility: showSelection ? 'visible' : 'hidden',
                            opacity: showSelection ? '1' : '0',
                            transition: 'all .2s'}}>

                    <p>Sauce Selected: {props.sauceName} </p>
                    <p>Topping Selected: {props.toppingName} </p>
                    <p>Base Selected: {props.baseName} </p>

                </div>

            </div>

            <div className={classes.options}>

                <form className={classes.form}>

                    <div className={classes.formGroup}>
                        
                        <label className={classes.inputField}>extra sauce
                            <input type="checkbox"></input>
                            <span className={classes.customRadio}></span>
                        </label>

                    </div>
                    
                    <div className={classes.formGroup}>
                         <label className={classes.inputField}>extra topping
                            <input type="checkbox"></input>
                            <span className={classes.customRadio}></span>
                        </label>
                    </div>

                    <div className={classes.formGroup}>
                         <label className={classes.inputField}>gluten free
                            <input type="checkbox"></input>
                            <span className={classes.customRadio}></span>
                        </label>
                    </div>
                  
                </form>

            </div>

            <div className={classes.checkout}>

                <div>

                    <button>checkout</button>
                    <span>&rarr;</span>
                    
                </div>
                
            </div>

        </section>

    )

}

export default summary;