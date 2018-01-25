import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

// Actions
import { getList } from '../actions/list.action';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { housing: {} };
  }
  componentWillMount(){
    axios.get(env.debug ? '/data/housing.json': `${env.api}housing/`).then(res => {
      this.setState({ housing: res.data });
    })
  }
  goList(link){
    console.log("this.props:", this.props);
    this.props.getList(link);
    this.props.history.push('list');
  }

  render(){
    let { ban, cats } = this.state.housing;
    let CatItem = (props) => {
      return (
        <div class={'housing-cat-item ' + props.classNmae}>
          <span onClick={()=>this.goList(props.item.link)}>
            {props.all && 'all the '} {props.item.name}
          </span>
        </div>
      )
    }
    return (
      <div class="homepage container">
        <h1 class="display-4 m-0 py-5 home-title">
          <span class="">Craigslist Housing</span>
        </h1>
        <section class="housing-cats py-5">
          {ban && <CatItem classNmae='col-md-8' key={-1} all item={ban}/>}
          {cats && cats.map((cat, index) =>
            <CatItem classNmae='col-md-4' key={index} item={cat} />
          )}
        </section>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { list: state.list }
}


export default connect(null, {getList})(Home);
