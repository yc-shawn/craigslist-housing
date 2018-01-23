import React, { Component } from 'react';
import { connect } from 'react-redux';

import { exampleFunction } from '../actions/example.action';

class Home extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    return (
      <div>Home page
        <img src="/assets/img/download.jpeg"/>
        {env.debug && <span>is debug mode {env.debug}</span>}
        <button onClick={this.props.exampleFunction}>Action button</button>
        <div>{this.props.example.value}</div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { example: state.example }
}

export default connect(mapStateToProps, {exampleFunction})(Home);
