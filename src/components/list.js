import React, { Component } from 'react';
import {Accordion, Panel, Button, ButtonGroup, ListGroup, ListGroupItem} from 'react-bootstrap';

class RecipeList extends Component {
    
    delete(id) {
        this.props.delete(id);
    }

    recipeGenerator = (item) => item.map((recipe) => {

        return (
            <Panel header={recipe.title} eventKey={recipe.title} key={recipe.title}>
                <h2>Ingredients</h2>
                <ListGroup>
                    {recipe.ingredients.map((item)=> {
                        return (
                            <ListGroupItem key={item} bsClass="ingredients">{item}</ListGroupItem>
                        )
                    })}
                </ListGroup>
                <h2>Instructions</h2>
                <ol>
                    {recipe.instructions.map((item)=> {
                        return (
                            <li key={item}>{item}</li>
                        )
                    })}
                </ol>
                    <div className="edit-buttons">
                        <Button bsClass="list-button" bsSize="small" onClick={() => this.props.getIt(recipe.title)}>edit</Button>
                        <Button bsClass="list-button" bsSize="small" onClick={this.delete.bind(this, recipe)}>delete</Button>
                    </div>
            </Panel>   
        )
    });
        
    render() {
        return(
            <div>
                <h1>Recipes</h1>
                <Accordion bsClass="card">
                    { this.recipeGenerator(this.props.Recipes) }
                </Accordion>
            </div>
        )
    }
    
}

export default RecipeList;