import React, { Component } from 'react';
import {Button, ButtonGroup, Modal, FormControl} from 'react-bootstrap';
import update from 'immutability-helper';

class ModalForm extends Component {

    constructor(props) {
        super(props);

        this.state={
            showModal: false,
            title: '',
            ingredients: '',
            instructions: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    assignAttribute = (ident) => {
        var x = document.getElementById(ident).name;
        var holder = this.props.currentRecipe;
        var temp = null;

        var check = holder[x].findIndex(el => el === this.state[x]);

        x == 'title' ?  temp = update(holder, {[x]: {$set: [this.state[x]] }}) 
        : x == 'ingredients' ? temp = update(holder, {[x]: {$push: [this.state[x]] }}) 
        : temp = update(holder, {[x]: {$push: [this.state[x]] }})

        check == -1 ? holder = temp : console.log('already exists')
        
        this.props.SetLive(holder)
        
        x == 'title' ? console.log('here') : this.setState({[x]: '' })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
    delete = (id, cat) => {
        var holder = this.props.currentRecipe;
        var category = this.props.currentRecipe[cat].filter(el => el != id );
        var temp = update(holder, {[cat]: {$set: category }});
        this.props.SetLive(temp)
    }

    handleKeyPress(target) {
        if(target.charCode==13){
                alert('Enter clicked!!!');    
        }
    }
      
    render() {
        return (
        <ButtonGroup>
            <Button bsStyle="primary" 
                bsSize="small" 
                onClick={() => this.props.Open()} 
            >
                Add Recipe
            </Button>

            <Modal show={this.props.showModal} onHide={() => this.props.SetLive( {title: [], ingredients: [], instructions: []} ) || this.props.Close()}>
                <Modal.Header>
                    <Modal.Title>
                        <input
                            id="Title" 
                            placeholder="Title"
                            name="title" 
                            value={this.state.title} 
                            onChange={this.handleInputChange}
                            onKeyPress={this.handleKeyPress}
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
                        {this.props.currentRecipe.ingredients.map((item)=> {
                            return (
                                <form key={item}>
                                    <li>{item}</li>
                                    <Button bsSize="small" onClick={() => this.delete(item, 'ingredients')}>Delete</Button>
                                </form>
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
                            onKeyPress={this.handleKeyPress}
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
                        {this.props.currentRecipe.instructions.map((item)=> {
                            return (
                                <form key={item}>
                                    <li>{item}</li>
                                    <Button 
                                        bsSize="small" 
                                        onClick={
                                            () => this.delete(item, 'instructions')
                                        }>
                                    Delete</Button>
                                </form>
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
                            onKeyPress={this.handleKeyPress}
                        />
                        <Button
                            onClick={() => this.assignAttribute("Instruction")} 
                            bsSize="small">
                            Add
                        </Button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={
                            () => this.props.AddRecipe(this.props.currentRecipe)
                            || this.props.SetLive( {title: [], ingredients: [], instructions: []} )
                            || this.props.Close() 
                        }       
                        onKeyPress={this.handleKeyPress}
                    >
                    Save</Button>
                </Modal.Footer>
            </Modal>                
        </ButtonGroup>
    )}
}

export default ModalForm;
