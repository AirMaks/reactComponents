/* eslint-disable */
import React, { Fragment } from 'react';
import Icon from './Icon';
import ButtonGroup from '../button-group/ButtonGroup';
import Button from '../button/Button';

class Sandbox extends React.Component {

    toggleActive(e) {
        if (e.target.classList.contains('active')) {
            e.target.classList.remove('active')
        } else {
            e.target.classList.add('active')
            for (let i = 0; i < e.target.parentNode.children.length; i++) {
                if (e.target !== e.target.parentNode.children[i]) {
                    e.target.parentNode.children[i].classList.remove('active')
                }
            }

        }
    }

    render() {
        return (
            <Fragment>

                <h2><span>1. Base icon:</span></h2>
                <Icon size={2} onClick={() => {
                    console.log('!!!');
                }} name="atom"/>

                <h2><span>2. Icons button group:</span></h2>
                <ButtonGroup>
                    <Button onClick={e => this.toggleActive(e)} active>
                        <Icon name="align-right"/>
                    </Button>
                    <Button onClick={e => this.toggleActive(e)}>
                        <Icon name="align-center"/>
                    </Button>
                    <Button onClick={e => this.toggleActive(e)}>
                        <Icon name="align-left"/>
                    </Button>
                    <Button onClick={e => this.toggleActive(e)}>
                        <Icon name="align-justify"/>
                    </Button>
                </ButtonGroup>

                <h2><span>3. Icon with size 8rem</span></h2>
                <Icon title="badge" size={8} name="award"/>

                <h2><span>4. Disabling icon functionality:</span></h2>
                <Icon size={2} disabled onClick={() => {
                    console.log('!!!');
                }} name="atom"/>

            </Fragment>
        )
    }

}

export default Sandbox;
/* eslint-enable */
