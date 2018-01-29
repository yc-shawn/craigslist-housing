import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch} from 'react-router-dom';

import Container from './components/container';
import Home from './components/home';
import List from './components/list';
import Detail from './components/detail';

export default class RouterComponent extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Container>
            <Route exact path="/" component={Home} />
            <Route path="/list" component={List} />
            <Route path="/detail" component={Detail} />
          </Container>
        </Switch>
      </Router>
    )
  }
}
