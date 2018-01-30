import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'
import axios from 'axios';

// Actions
import { getDetail } from '../actions/detail.action';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.state = {detail:{}};
  }
  componentWillMount(){
    axios.get(env.debug ? `${env.data}detail.json` :`${env.api}housing-detail/`, {
      params: {link: this.props.item.link},
      cache: true
    }).then((res) => {
      this.setState({detail: res.data});
    })
  }
  goDetail(){
    this.props.getDetail(this.props.item.link)
    this.props.history.push('detail');
  }
  render(){
    let { item } = this.props;
    let { detail } = this.state;
    let carouselId = `list-carousel-${item.pid}`;
    return (
      <Card class="housing-list-item">
        {detail.images ?
          <div id={carouselId} class="carousel slide" data-ride="carousel" data-interval="false">
            <ol class="carousel-indicators">
              {detail.images.map((img, index) =>
                <li data-target={`#${carouselId}`} key={index} data-slide-to={index} class={index ? '' : 'active'}/>
              )}
            </ol>
            <div class="carousel-inner" onClick={()=>this.goDetail()}>
              {detail.images.map((img, index) =>
                <div class={"carousel-item " + (index ? '' : 'active')} key={index}>
                  <img class="d-block" src={img} alt="First slide" />
                </div>
              )}
            </div>
            <a class="carousel-control-prev" href={`#${carouselId}`} role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href={`#${carouselId}`} role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div> :
          <div class="no-detail-images">
            <div class="no-img-text">No Images</div>
          </div>
        }
        {item.price && item.price.length && <div class="price">{item.price}</div>}
        <Card.Content onClick={()=>this.goDetail()}>
          { item.title }
        </Card.Content>
      </Card>
    )
  }
}

export default withRouter(connect(null, {getDetail})(ListItem));
