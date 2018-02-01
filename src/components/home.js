import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios';

// Actions
import { getList } from '../actions/list.action';
import { switchArea } from '../actions/area.action';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { housing: {} };
  }

  componentWillMount(){
    let { switchArea, area} = this.props;
    switchArea(area && area.area);
  }

  goList(link){
    this.props.getList(link);
    this.props.history.push('list');
  }

  render(){
    let { area } = this.props;
    let { ban, cats } = area && area.currentArea || {};
    let CatItem = (props) => {
      return (
        <div class={'housing-cat-item ' + props.classNmae}>
        <Button fluid size='huge' color={props.all ? 'teal' : 'olive'}
          content={(props.all ? 'all the ' : '') + props.item.name}
          onClick={()=>this.goList(props.item.link)}/>
        </div>
      )
    }
    return (
      <div class="homepage container">
        <h1 class="display-4 m-0 py-5 home-title">
          <span class="">Craigslist Housing</span>
        </h1>
        {area ?
          <section class="housing-cats py-5">
            {ban && <CatItem classNmae='col-md-8' key={-1} all item={ban}/>}
            {cats && cats.map((cat, index) =>
              <CatItem classNmae='col-md-4' key={index} item={cat} />
            )}
          </section> :
          <Dimmer active class="py-5">
            <Loader active size="big"/>
          </Dimmer>
        }
      </div>
    )
  }
}

function mapStateToProps(state){
  return { area: state.area }
}



export default connect(mapStateToProps, {getList, switchArea})(Home);
