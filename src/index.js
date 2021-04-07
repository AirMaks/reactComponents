import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Home from './layout/home/home';
import ButtonSandbox from './components/button/Sandbox';
import ButtonGroupSandbox from './components/button-group/Sandbox';
import IconSandbox from './components/icon/Sandbox';
import ImageSandbox from './components/image/Sandbox';
import ChipSandbox from './components/chip/Sandbox';
import ListGroupSandbox from './components/list-group/Sandbox';
import InputSandbox from './components/input/Sandbox';

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/button" component={ButtonSandbox} />
                <Route path="/button-group" component={ButtonGroupSandbox} />
                <Route path="/icon" component={IconSandbox} />
                <Route path="/image" component={ImageSandbox} />
                <Route path="/chip" component={ChipSandbox} />
                <Route path="/list-group" component={ListGroupSandbox} />
                <Route path="/input" component={InputSandbox} />
            </Switch>
        </App>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();