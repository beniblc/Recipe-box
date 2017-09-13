import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/recipe-list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={recipes: undefined }
  };

  SetRecipes = (recipes) => this.setState({recipes}) | console.log(this.recipes)

  getRecipes = (recipeSet) => {
    !recipeSet ? localStorage.recipes = JSON.stringify(stockRecipes) : console.log('set')  
  }

  removeRecipes = (recipe) => {
    
  }

  recipeCheck = () => {

  }

  render() {
    {console.log(this.state.recipes)}    
    return(
      <div>
        <RecipeList 
          Recipes = { this.state.recipes } />
      </div>
    )
  }

  componentWillMount() {
    this.getRecipes(localStorage.recipes)
    this.setState({
      recipes: JSON.parse(localStorage.recipes)
    })
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
