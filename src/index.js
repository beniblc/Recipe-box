import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Acordion } from 'react-bootstrap';
import update from 'immutability-helper';

import RecipeList from './components/list';
import ModalForm from './components/modal-form';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      recipes: undefined
    };
    this.delete = this.delete.bind(this);
  }

  componentWillMount() {  
    const getRecipes = (recipeSet) => {
      !recipeSet ? localStorage.recipes = JSON.stringify(this.stockRecipes) : console.log('set')
    }

    getRecipes(localStorage.recipes)
    this.setState({
      recipes: JSON.parse(localStorage.recipes)
    }) 
  }

  addRecipe = (value) => {
    var holder = this.state.recipes;
    var temp = update(holder, {$push: [value]});
    localStorage.setItem('recipes', JSON.stringify(temp));
    this.setState({recipes: temp}) 
  }

  delete = (id) => {
    this.setState(prevState => ({
        recipes: prevState.recipes.filter(el => el != id )
    }));
  }

  render() {
    localStorage.setItem('recipes', JSON.stringify(this.state.recipes));
    console.log(this.state.recipes)
    return(
      <div className="container"> 
        <RecipeList 
          Recipes = { this.state.recipes }
          delete={this.delete}/>   
        <ModalForm AddRecipe = {this.addRecipe }/>
      </div>
    ) 
  }

  stockRecipes = [
    { title: ["Kongo Bar"], 
      ingredients: [
        "Greham Crumbs",
        "Condenced Milk",
        "Butter"
      ],
      instructions: [
        "Put the butter into the frying pan and wait until the butter has melted.",
        "Add the Greham Crumbs and mix with the butter until both have mixed.",
        "Spread Greham Crumbs onto the bad so that it is evenly distributed at 1 cm high.",
        "Spread Condensed Milk on top of the Greham Crumbs.",
        "Bake for 20 minutes at 350 degrees Fahrenheit."
      ]
    },
    { title: ["Gravlax"], 
      ingredients: [
        "Salmon",
        "Sea Salt",
        "4 Table Spoons of Vodka",
        "Coriander",
        "Olive Oil",
        "Dill"
      ],
      instructions: []
    }];
}

ReactDOM.render(<App />, 
document.querySelector('.container'));