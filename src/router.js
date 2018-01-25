import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Container from './components/container';
import Home from './components/home';
import About from './components/about';

export default class RouterComponent extends Component {

  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Router>
      </Container>

    )
  }
}
