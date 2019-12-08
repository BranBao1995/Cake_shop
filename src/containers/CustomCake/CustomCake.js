import React, { Component } from 'react';

import classes from './CustomCake.css';
import WithClass from '../../hoc/WithClass/WithClass';
import Nav from '../../components/Nav/Nav';
import Cake from './Cake/Cake';
import BuildControl from './BuildControl/BuildControl';
import Summary from '../../components/Summary/Summary';


class CustomCake extends Component {


    state = {

        availability: {

            sauce: ['chocolate', 'jam', 'remove'],
            topping: ['strawberry', 'kiwi', 'remove'],
            base: ['egg-cake', 'matcha-cake', 'remove']

        },

        ingredients: {

            sauce: 'chocolate',
            topping: 'kiwi',
            base: 'egg-cake'

        }


    }


    sauceHandler = (sauce) => {

        let temp = this.state.ingredients;

        temp.sauce = sauce;

        if (temp.sauce === 'remove') {
            temp.sauce = null;
        }

        this.setState({ingredients: temp});

    }

     toppingHandler= (topping) => {

        let temp = this.state.ingredients;

        temp.topping = topping;

        if (temp.topping === 'remove') {
            temp.topping = null;
        }

        this.setState({ingredients: temp});

    }

    baseHandler = (base) => {

        let temp = this.state.ingredients;

        temp.base = base;

        if (temp.base === 'remove') {
            temp.base = null;
        }

        this.setState({ingredients: temp});

    }



    render(){
       

        let sauceSelection = null;
        let toppingSelection = null;
        let baseSelection = null;

        let showSummary = null;

        let sauceName = null;
        let toppingName = null;
        let baseName = null;

        if (this.state.ingredients.base !== null) {
            baseName = this.state.ingredients.base + ' ';

            if (this.state.ingredients.sauce !== null) {
                sauceName = this.state.ingredients.sauce + ' ';
            } else {
                sauceName = null;
            }

            if (this.state.ingredients.topping !== null) {
                toppingName = 'with ' + this.state.ingredients.topping;
            } else {
                toppingName = null;
            }


        } else {

            sauceName = 'Please ';
             toppingName = 'base';
             baseName = 'select a ';

        }

        if ((this.state.ingredients.sauce === null || this.state.ingredients.sauce === 'remove') && (this.state.ingredients.topping === null || this.state.ingredients.topping === 'remove') && (this.state.ingredients.base === null || this.state.ingredients.base === 'remove')) {
            showSummary = false;
        } else {
            showSummary = true;
        }


        sauceSelection = this.state.availability.sauce.map(el => {
            return (
                <BuildControl key={el} description={el} clicked={() => this.sauceHandler(el)} />
            )
        });

        toppingSelection = this.state.availability.topping.map(el => {
            return (
                <BuildControl key={el} description={el} clicked={() => this.toppingHandler(el)} />
            )
        });


        baseSelection = this.state.availability.base.map(el => {
            return (
                <BuildControl key={el} description={el} clicked={() => this.baseHandler(el)} />
            )
        });


        return (
            
            <WithClass classes={classes.customCake}>

                <Nav destination="Browse" />
                <section className={classes.cakeBuilding}>

                    <Cake ingredients={this.state.ingredients} />
                    <div className={classes.buildControl}>

                        <div className={classes.sauceOptions}>
                            Choice of sauce: {sauceSelection}
                        </div>

                        <div className={classes.toppingOptions}>
                            Choice of topping: {toppingSelection}
                        </div>

                        <div className={classes.baseOptions}>
                            Choice of base: {baseSelection}
                        </div>

                    </div>

                </section>

                <Summary sauceName={sauceName} toppingName={toppingName} baseName={baseName} show={showSummary} />

            </WithClass>

        )

    }

}


export default CustomCake;