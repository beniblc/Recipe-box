import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/recipe-list';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      recipes: undefined,
      showModal: false
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

  SetRecipes = (recipes) => this.setState({recipes}) | console.log(this.recipes)

  ModalOn = () => {
    this.setState({ showModal: true });
    console.log(this.state.showModal) 
  }

  ModalOff = () => {
    this.setState({ showModal: false });
    console.log(this.state.showModal) 
  }

  RecipeAdd = () => {
  
    return (
        <div className="static-modal">
        <Modal show={this.state.showModal} onHide={this.ModalOff}>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
          </Modal.Header>
    
          <Modal.Body>
            One fine body...
          </Modal.Body>
    
          <Modal.Footer>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </Modal.Footer>
    
        </Modal>
      </div>
    )
  }

  render() {
    {console.log(this.state.recipes)}    
    return(
      <div>
        {this.RecipeAdd}
        <RecipeList 
          Recipes = { this.state.recipes }
          On = {this.ModalOn}
           />
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
