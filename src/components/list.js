import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';


class List extends Component {
  constructor(){
    super();
  }

  render(){

    return (
      <div class="homepage container">
        list
      </div>
    )
  }
}


export default connect(()=>{}, {})(List);
