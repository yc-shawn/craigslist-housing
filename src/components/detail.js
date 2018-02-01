import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Card, Image, Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios';

class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {index: 0};
  }
  componentDidMount(){
    $('#housing-detail-carousel').bind('slid.bs.carousel', (e) => {
      this.setState({ currentSlide: e.to });
    })
  }

  render(){
    let { detail } = this.props;
    let { currentSlide } = this.state;
    let carouselId = `housing-detail-carousel`;
    console.log(detail);
    return detail ?
      <div class="container py-5">
        <Card fluid class="housing-detail">
          <div id={carouselId} class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              {detail.images && detail.images.map((img, index) =>
                <li data-target={`#${carouselId}`} key={index} data-slide-to={index} class={index ? '' : 'active'}/>
              )}
            </ol>
            <div class="carousel-inner" >
              {detail.images && detail.images.map((img, index) =>
                <div class={"carousel-item " + (index ? '' : 'active')} key={index}
                     style={{ backgroundImage: `url('${img}')`}} />
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
          </div>
          <section class="thumbnail-list-container">
            <div class="thumbnail-list">
              {detail.images && detail.images.map((img, index) =>
                <span class={'thumbnail-container ' + (index === currentSlide ? 'active' : '')}
                      key={index} data-target={`#${carouselId}`} data-slide-to={index}>
                  <div style={{ backgroundImage: `url('${img}')`}} key={index}/>
                </span>
              )}
            </div>
          </section>
          <Card.Content>
            {detail.content && detail.content.map((paragraph, index) =>
              <p key={index}>{paragraph}</p>
            )}
          </Card.Content>
        </Card>
      </div> :
      <Dimmer active class="py-5">
        <Loader active size="big"/>
      </Dimmer>
  }
}

function mapStateToProps(state){
  return { detail: state.detail }
}

export default connect(mapStateToProps, {})(Detail);
