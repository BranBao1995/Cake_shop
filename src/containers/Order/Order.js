import React, { Component } from 'react';

import classes from './Order.css';
import Nav from '../../components/Nav/Nav';
import WithClass from '../../hoc/WithClass/WithClass';


class Order extends Component {


    render () {

        return (

            <WithClass classes={classes.order}>

                <Nav destination="Browse" />
                <section className={classes.infoSection}>

                    <div className={classes.info}>

                        <h1>
                            Instructions to Place Your Order
                        </h1>

                        <p>
                            Unfortunately, online ordering is currently not supported (coming soon!). In order to place your order,
                            you may simply tell us the name of the item, or in the case of a custom cake order, send us the screenshot of 
                            the page with the final build summary in it. You may reach us at: 
                               
                        </p>

                        <div className={classes.contacts}>

                                <p>WeChat: space_jumper</p>
                                <p>Phone: +1 (647)-290-7968</p>
                                <p>Email: bbao006@uOttawa.ca</p>


                        </div>

                    </div>

                </section>


            </WithClass>

        )

    }


}

export default Order;