import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/recipe-list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={recipes: undefined }
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

  SetRecipes = (recipes) => this.setState({recipes}) | console.log(this.recipes)

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
