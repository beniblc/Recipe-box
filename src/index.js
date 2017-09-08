import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/recipe-list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={recipes: [] }

    this.getRecipes(JSON.parse(localStorage.getItem("recipes")))
  };

  SetRecipes = (recipes) => this.setState({recipes}) | console.log(this.recipes)

  getRecipes = (recipeSet) => {
    !recipeSet ? 
      localStorage.recipes = JSON.stringify(stockRecipes)
      : console.log(recipeSet) | console.log(this.state.recipes)      
  }

  setRecipes = (recipe) => {

  }

  removeRecipes = (recipe) => {

  }

  render() {
    return(
      <div>
        <RecipeList />
      </div>
    )
  }

}

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

ReactDOM.render(<App />, 
document.querySelector('.container'));
