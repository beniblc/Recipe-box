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
    console.log(id);
 }

  render() {
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
      instructions: []
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