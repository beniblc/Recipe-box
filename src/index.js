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
      recipes: undefined,
      liveRecipe: {title: [], ingredients: [], instructions: []},
      showModal: false,
      existngRecipe: false
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

  setLive = (item) => {this.setState({liveRecipe: item})}

  close = () => {
    this.setState({ showModal: false });
}

  open = () => {
      this.setState({ showModal: true });
  }

  addRecipe = (value) => {
    var holder = this.state.recipes;
    var temp = undefined;


    this.state.existngRecipe == true ? temp = update(holder, {[holder.findIndex(el => el.title == value.title)]: {$set: value}}) : temp = update(holder, {$push: [value]})     

    localStorage.setItem('recipes', JSON.stringify(temp));
    this.setState({recipes: temp, existngRecipe: false});
  }

  editRecipe = (value) => {
    var getIt = this.state.recipes.filter(el => el.title == value);
    this.setState({liveRecipe: getIt[0], showModal: true, existngRecipe: true});
    console.log(this.state.liveRecipe)
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
          delete={this.delete}
          getIt = {this.editRecipe}/>   
        <ModalForm
          currentRecipe = {this.state.liveRecipe}
          showModal = {this.state.showModal}
          Check = {this.state.existngRecipe}
          AddRecipe = {this.addRecipe }
          SetLive = {this.setLive}
          Open = {this.open}
          Close = {this.close} />
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
        "Sugar",
        "4 Table Spoons of Vodka",
        "Coriander",
        "Olive Oil",
        "Dill"
      ],
      instructions: [
        "Mix 1 cup of Sea Salt for 3/4 cups of Sugar."
      ]
    }];
}

ReactDOM.render(<App />, 
document.querySelector('.container'));