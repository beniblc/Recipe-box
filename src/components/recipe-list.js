import React, { Component } from 'react';
import {Accordion, Panel, Button, ButtonGroup} from 'react-bootstrap';
import Recipe from './recipe-items.js';

const RecipeList = (props) => {

    return (
        <div> Recipes
            <Accordion>
        <Panel header="Kongo Bar" eventKey="1">
            <h2>Ingredients</h2>
            <ul>
                <li>Graham Crumbs</li>
                <li>Butter</li>
                <li>Condenced Milk</li>
            </ul>
            <h2>Instructions</h2>
            <ol>
                <li>Dry the greyham crumbs with butter until the butter is absorbed into it.</li>
                <li>Spred the greyham crumbs onto the cooking pan evenly at about 3/4 cm high.</li>
                <li>Take the condenced milk and pour it evenly on top of the graham crumbs.</li>
                <li>Heat for 15 minutes at  350 degrees F.</li>
            </ol>
            <ButtonGroup>
                <Button bsStyle="default" bsSize="small">edit</Button>
                <Button bsSize="small">delete</Button>
            </ButtonGroup>
        </Panel>
        <Panel header="Collapsible Group Item #2" eventKey="2">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </Panel>
        <Panel header="Collapsible Group Item #3" eventKey="3">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
        </Panel>
            </Accordion>
        </div>
    )

}

export default RecipeList;
