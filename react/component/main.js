import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, hashHistory} from 'react-router';
import App from './app';
import Repos from './repos';
import About from './about';


ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/react/" component={App}>
            <Route path="/react/repos" component={Repos}/>
            <Route path="/react/about" component={About}/>
        </Route>
    </Router>
), document.getElementById('app'));