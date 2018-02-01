import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Card, Image, Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios';

import ListItem from './listItem';

class List extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let { list } = this.props;
    console.log("list:", list);
    return (
      <div class="list-page py-5">
        {list ?
          <Card.Group class="justify-content-center">
            {list && list.list && list.list.map((item, index) =>
              <ListItem key={item.pid} item={item}/>
            )}
          </Card.Group> :
          <Dimmer active class="py-5">
            <Loader active size="big"/>
          </Dimmer>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return { list: state.list }
}

export default connect(mapStateToProps, {})(List);
