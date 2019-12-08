import React, { Component } from 'react';

import WithClass from '../../hoc/WithClass/WithClass';
import classes from './Welcome.css';
import Nav from '../../components/Nav/Nav';
import Jumbotron from '../../containers/Jumbotron/Jumbotron';
import BgVideo from '../../components/BgVideo/BgVideo';

class Welcome extends Component {


    render(){


        return (

            <WithClass classes={classes.welcome}>

                <Jumbotron />
                <BgVideo />


            </WithClass>


        );


    }


}

export default Welcome;