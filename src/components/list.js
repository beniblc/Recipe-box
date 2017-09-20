import React, { Component } from 'react';
import {Accordion, Panel, Button, ButtonGroup} from 'react-bootstrap';

const RecipeList = (props) => {

    const recipeGenerator = (props.Recipes).map((recipe) => {

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
            <h1>Recipes</h1>
            <Accordion>
                { recipeGenerator }
            </Accordion>
        </div>
    )
    
}

export default RecipeList;