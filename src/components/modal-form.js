import React, { Component } from 'react';
import {Accordion, Panel, Button, ButtonGroup, Modal} from 'react-bootstrap';
import update from 'immutability-helper';

class ModalForm extends Component {

    constructor() {
        super();

        this.state={
            showModal: false,
            currentRecipe: {title: 'test', ingredients: [], instructions: []},
            title: '',
            ingredients: '',
            instructions: ''
        };

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }
  
    open() {
        this.setState({ showModal: true });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    assignAttribute = (ident) => {
        var x = document.getElementById(ident).name;
        var holder = this.state.currentRecipe;
        var temp = null;
        var change = this.state[x];
        
        x == 'title' ?  temp = update(holder, {[x]: {$set: this.state.title }}) 
        : x == 'ingredients' ? temp = update(holder, {[x]: {$push: [this.state.ingredients] }}) 
        : temp = update(holder, {[x]: {$push: [this.state.instructions] }})

        holder = temp
        this.setState({ currentRecipe: holder})
        console.log(this.state.currentRecipe)
        
    }    

    testAttribute = (attribute) => {
        var holder = this.state.currentRecipe;
        var temp = update(holder, {name: {$set : attribute}});
      
        this.setState({
          currentRecipe: temp,
          title: attribute
        });
    }
      
    render() {
        return (
        <ButtonGroup>
            <Button bsStyle="primary" 
                bsSize="small" 
                onClick={this.open.bind(this)} 
            >
                Add Recipe
            </Button>

            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header>
                    <Modal.Title>
                        <input
                            id="Title" 
                            placeholder="Title"
                            name="title" 
                            value={this.state.title} 
                            onChange={this.handleInputChange}
                        />
                    </Modal.Title>
                    <Button 
                        onClick={() => this.assignAttribute("Title")} 
                        bsSize="small">
                        Edit
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <h3>Ingredients</h3>
                    <ul>
                        {this.state.currentRecipe.ingredients.map((item)=> {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })}
                    </ul>
                    <form>
                        <input
                            id="Ingredient"
                            placeholder="New Ingredient" 
                            name="ingredients"
                            className=" box1" 
                            value={this.state.ingredients}
                            onChange={this.handleInputChange}
                        />
                        <Button 
                            onClick={() => this.assignAttribute("Ingredient")} 
                            bsSize="small">
                            Add
                        </Button>
                    </form>
                    <br/>
                    <h3>Instructions</h3>
                    <ol>
                        {this.state.currentRecipe.instructions.map((item)=> {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })}
                    </ol>
                    <form>
                        <textarea
                            id="Instruction"
                            placeholder="New Instruction"
                            name="instructions" 
                            className="box2" 
                            value={this.state.instructions}
                            onChange={this.handleInputChange}
                        />
                        <Button
                            onClick={() => this.assignAttribute("Instruction")} 
                            bsSize="small">
                            Add
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => this.testAttribute('works') || console.log(this.state.currentRecipe)}>Save</Button>
                </Modal.Footer>
            </Modal>                
        </ButtonGroup>
    )}
}

export default ModalForm;