
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Jumbotron.css';
import Nav from '../../components/Nav/Nav';
import Button from '../../components/Buttons/Button';

class Jumbotron extends Component {


    browseHandler = () => {
        this.props.history.push("/Browse");
    }

    customHandler = () => {
        this.props.history.push("/customize");
    }

    render(){

        return (

            <section className={classes.jumbotron}>

                <Nav destination="Browse" />

                <div className={classes.jumbotron__main}>

                    <div className={classes.jumbotron__text}>

                        <h1>Welcome!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Proin a rhoncus turpis. 
                            Nullam molestie nisi quis diam maximus vulputate. 
                            Vestibulum laoreet elit justo, 
                            a pulvinar sapien eleifend nec.</p>

                    </div>

                    <div className={classes.jumbotron__buttons}>
 
                        <Button clicked={this.browseHandler} iconType="browse">Take a look at our cakes!</Button>
                        <Button clicked={this.customHandler} iconType="customize">Build your own cake!</Button>

                    </div>
                
        
                </div>
                

            </section>

        );

    }

}

export default withRouter(Jumbotron);