import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeList from './components/recipe-list';

class App extends Component {

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
