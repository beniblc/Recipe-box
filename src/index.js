import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/recipe-list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={recipes: [] }
  };

  getRecipes = (recipes) => {
    var recipeList = localStorage.getItem('recipeList');
    recipeList = [] ? localStorage.setItem("recipeList", [{name: "Kongo Bar", ingredients: "greham crumbs"},{name: "Gravlax", ingredients: "Salmon"}])
    : this.setState()
        
  }

  render() {
    return(
      <div>
        <RecipeList />
      </div>
    )
  }

}

ReactDOM.render(<App />, 
document.querySelector('.container'));
