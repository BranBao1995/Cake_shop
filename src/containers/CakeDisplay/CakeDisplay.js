import React, { Component } from 'react';


import classes from './CakeDisplay.css';
import Nav from '../../components/Nav/Nav';
import BgVideo from '../../components/BgVideo/BgVideo';
import WithClass from '../../hoc/WithClass/WithClass';

import Cake from  '../../components/Cake/Cake';
import Detail from '../../components/Detail/Detail';

class CakeDisplay extends Component {

    state = {

        cakes: [
            {name: "Volcano", id: 1, ingredients: "eggs, flour, sugar", price: 20, visible: false},
            {name: "Volcano", id: 2, ingredients: "eggs, flour, sugar", price: 20, visible: false},
            {name: "Volcano", id: 3, ingredients: "eggs, flour, sugar", price: 20, visible: false},
            {name: "Volcano", id: 4, ingredients: "eggs, flour, sugar", price: 20, visible: false}
        ]

    }

    makeDetailVisible = (id) => {

        const temp = this.state.cakes;

       

        temp[id].visible = true;

        //  console.log(temp[id]);
        this.setState({cakes: temp});


    }

    makeDetailInvisible = (id) => {

        const temp = this.state.cakes;

        temp[id].visible = false;

        // console.log(temp[id]);

        this.setState({cakes: temp});

    }


    render(){


        let cakes = [];

        let modals = [];


        cakes = this.state.cakes.map((cake, index) => {
            return (


                <Cake key={cake.id} cakeName={cake.name} price={cake.price} clicked={() => this.makeDetailVisible(index)} />
                    
              
            )
        });

        modals = this.state.cakes.map((cake, index) => {

            return (
                <Detail 
                        key={cake.id}
                        cakeName={cake.name} 
                        ingredients={cake.ingredients} 
                        show={cake.visible} 
                        clicked={() => this.makeDetailInvisible(index)} 
                        />

            )

        });

        return(


            <WithClass classes={classes.cakeDisplay}>

                <div className={classes.jumbotron}>

                    <Nav destination="Customize" />

                    <div className={classes.display}>
                        {cakes}
                    </div>

                    {modals}


                </div>

                <BgVideo />

            </WithClass>
            

        )

    }

}


export default CakeDisplay;