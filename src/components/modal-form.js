import React, { Component } from 'react';
import {Accordion, Panel, Button, ButtonGroup, Modal} from 'react-bootstrap';

class ModalForm extends Component {

    constructor() {
        super();

        this.state={
            showModal: false,
            currentRecipe: {name: 'title', ingredients: [], instructions: []},
            nameVal: '',
            ingredientVal: '',
            instructionVal: '' 
        };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }
  
    open() {
        this.setState({ showModal: true });
    }

    handleChange(event) {
        this.setState({})
    }

    ChangeCurrentRecipe = (item) => {
        this.setState({cureentRecipe: item})
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
                        <Modal.Title><input value={this.state.currentRecipe.name} onChange={event => this.event.target.value}/></Modal.Title>
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
                                className=" box1" 
                                value={this.state.term}
                                onChange={event => this.event.target.value}
                            />
                            <Button onClick={console.log(this.state.value)} bsSize="small">Add</Button>
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
                                className=" box2" 
                                value={this.state.term}
                                onChange={event => this.event.target.value}
                            />
                            <Button onClick={console.log(this.state.value)} bsSize="small">Add</Button>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={console.log(this.close)}>Save</Button>
                    </Modal.Footer>
            </Modal>                
        </ButtonGroup>
    )}
}

export default ModalForm;