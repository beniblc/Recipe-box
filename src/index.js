import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Acordion } from 'react-bootstrap';

import RecipeList from './components/list';
import ModalForm from './components/modal-form';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      recipes: undefined
    } 
  }

  componentWillMount() {  
    const getRecipes = (recipeSet) => {
      !recipeSet ? localStorage.recipes = JSON.stringify(stockRecipes) : console.log('set')
    }

    getRecipes(localStorage.recipes)
    this.setState({
      recipes: JSON.parse(localStorage.recipes)
    }) 
  }

  render() {
    console.log(this.state.recipes)
    return(
      <div className="container"> 
        <RecipeList Recipes = { this.state.recipes }/>   
        <ModalForm />
      </div>
    ) 
  }
}

ReactDOM.render(<App />, 
document.querySelector('.container'));

var stockRecipes = [
  { name: "Kongo Bar", 
    ingredients: [
      "Greham Crumbs",
      "Condenced Milk",
      "Butter"
    ],
    instructions: []
  },
  { name: "Gravlax", 
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