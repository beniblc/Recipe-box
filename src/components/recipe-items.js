import React from 'react';
import {Accordion, Panel, Button, ButtonGroup} from 'react-bootstrap';

const Recipe = (props) => {

    mapList = (item) => {
        item.map(() => item)
    }

    return (
        <Panel header={props.name} eventKey="1">
        <h2>Ingredients</h2>
        <ul>
            { mapList() }
        </ul>
        <h2>Instructions</h2>
        <ol>
            { mapList() }
        </ol>
        <ButtonGroup>
            <Button bsStyle="default" bsSize="small">edit</Button>
            <Button bsSize="small">delete</Button>
        </ButtonGroup>
    </Panel>
    )

}

export default Recipe;