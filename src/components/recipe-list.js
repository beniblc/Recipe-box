import React, { Component } from 'react';
import {Accordion, Panel, Button, ButtonGroup, Modal} from 'react-bootstrap';
import Recipe from './recipe-items.js';

const RecipeList = (props) => {

    return (
        <div> Recipes
            <Recipe Recipes = { props.Recipes }/>   
        </div>
    )
}

export default RecipeList;
