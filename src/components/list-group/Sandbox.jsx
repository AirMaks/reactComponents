/* eslint-disable */
import React, { Fragment } from 'react';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';
import Button from '../button/Button';

const Sandbox = () => (
    <Fragment>

        <h2><span>1. Base Group list:</span></h2>
        <ListGroup horizontal>
            <ListGroupItem active>List item 1</ListGroupItem>
            <ListGroupItem>List item 2</ListGroupItem>
            <ListGroupItem>List item 3</ListGroupItem>
            <ListGroupItem>List item 4</ListGroupItem>
        </ListGroup>

        <h2><span>2. Group list with active and disabled elements:</span></h2>
        <ListGroup>
            <ListGroupItem active>List item 1</ListGroupItem>
            <ListGroupItem>List item 2</ListGroupItem>
            <ListGroupItem disabled>List item 3</ListGroupItem>
            <ListGroupItem>List item 4</ListGroupItem>
        </ListGroup>

        <h2><span>3. Group list with custom components:</span></h2>
        <ListGroup>
            <ListGroupItem>
                List item 1

            </ListGroupItem>
            <ListGroupItem>
                List item 2

            </ListGroupItem>
            <ListGroupItem>
                List item 3

            </ListGroupItem>
            <ListGroupItem>
                List item 4
                <Button>Update</Button>
            </ListGroupItem>
        </ListGroup>

        <h2><span>4. Group list links:</span></h2>
        <ListGroup>
            <ListGroupItem active><a href="#">List item 1</a></ListGroupItem>
            <ListGroupItem><a href="#">List item 1</a></ListGroupItem>
            <ListGroupItem><a href="#">List item 1</a></ListGroupItem>
            <ListGroupItem><a href="#">List item 1</a></ListGroupItem>
        </ListGroup>

    </Fragment>
);

export default Sandbox;
/* eslint-enable */
