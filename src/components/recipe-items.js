import React from 'react';
import {Accordion, Panel, Button, ButtonGroup} from 'react-bootstrap';
import RecipeAdd from './recipe-add';

const Recipe = (props) => {

    const recipeGenerator =JSON.parse(localStorage.recipes).map((recipe, i) => {

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

    return (
        <div>
            <Accordion>
                { recipeGenerator }
            </Accordion>
            <ButtonGroup>
                <Button bsStyle="default" bsSize="small" onClick={() => {this.RecipeAdd; console.log('ok')}} >Add Recipe</Button>                
            </ButtonGroup>
        </div>
    )
}

export default Recipe;