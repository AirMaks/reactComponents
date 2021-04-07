/* eslint-disable */
import React, {Fragment, Component} from 'react';
import ButtonGroup from './ButtonGroup';
import Button from '../button/Button';

class Sandbox extends Component {
    state = {
        switchOn: true,
        active: false
    }

    handleSwitchOn = () => {
        this.setState({switchOn: true});
    }

    handleSwitchOff = () => {
        this.setState({switchOn: false});
    }

    toggleActive = (e) => {


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
        const {switchOn} = this.state;

        return (
            <Fragment>

                <h2><span>1. Horizontal button group:</span></h2>
                <ButtonGroup>
                    <Button onClick={e => this.toggleActive(e)} active>First</Button>
                    <Button onClick={e => this.toggleActive(e)}>Middle</Button>
                    <Button onClick={e => this.toggleActive(e)}>Last</Button>
                </ButtonGroup>

                <h2><span>2. Vertical button group:</span></h2>
                <ButtonGroup vertical>
                    <Button onClick={e => this.toggleActive(e)} active>First</Button>
                    <Button onClick={e => this.toggleActive(e)}>Middle</Button>
                    <Button onClick={e => this.toggleActive(e)}>Last</Button>
                </ButtonGroup>

                <h2><span>3. Switcher button group:</span></h2>
                <ButtonGroup>
                    <Button onClick={this.handleSwitchOn} active={switchOn}>ON</Button>
                    <Button onClick={this.handleSwitchOff} active={!switchOn}>OFF</Button>
                </ButtonGroup>

            </Fragment>
        );
    }
}

export default Sandbox;
/* eslint-enable */
