import React, { Component } from 'react';
import {Accordion, Panel, Button, ButtonGroup} from 'react-bootstrap';
import RecipeAdd from './recipe-add';

class Recipe extends Component {

    constructor() {
        super();

        this.state={ showModal: false }
    }

    ModalOn = () => this.setState({showModel: true})

    ModalOff = () => this.setState({showModel: false})

    recipeGenerator = JSON.parse(localStorage.recipes).map((recipe, i) => {

        return (
            <Panel header={recipe.name} eventKey={recipe.name} key={recipe.name}>
                <h2>Ingredients</h2>
                <ul>
                    {recipe.ingredients.map((item)=> {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })}
                </ul>
                <h2>Instructions</h2>
                <ol>
                    {recipe.instructions.map((item)=> {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })}
                </ol>
                <ButtonGroup>
                    <Button bsStyle="default" bsSize="small">edit</Button>
                    <Button bsSize="small">delete</Button>
                </ButtonGroup>
            </Panel>   
        )
    });

    RecipeAdd = () => {
        return (
            <div className="static-modal">
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
        
              <Modal.Body>
                One fine body...
              </Modal.Body>
        
              <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
              </Modal.Footer>
        
            </Modal.Dialog>
          </div>
        )
    }

    render() {
        return (
            <div>
                <Accordion>
                    { this.recipeGenerator }
                </Accordion>
                <ButtonGroup>
                    <Button bsStyle="default" bsSize="small" onClick={() => {this.ModalOn; console.log('ok')}} >Add Recipe</Button>                
                </ButtonGroup>
            </div>
        )
    }
}

export default Recipe;