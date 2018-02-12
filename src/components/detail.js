import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Card, Image, Dimmer, Loader } from 'semantic-ui-react'
import axios from 'axios';
import Map from 'google-map-react';

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
    let { images, map, content, title } = detail || {};
    let { currentSlide } = this.state;
    let carouselId = `housing-detail-carousel`;
    const Mark = () => (<div class="map-mark"/>);
    console.log(detail);
    return detail ?
      <div class="container py-5">
        <Card fluid class="housing-detail">
          <section class="d-flex">
            {/** Detail Images */}
            <div class="detail-image-container">
              {images && images.length ? [
                <section id={carouselId} key="carousel" class="carousel slide" data-ride="carousel">
                  <ol class="carousel-indicators">
                    {images && images.map((img, index) =>
                      <li data-target={`#${carouselId}`} key={index} data-slide-to={index} class={index ? '' : 'active'}/>
                    )}
                  </ol>
                  <div class="carousel-inner" >
                    {images && images.map((img, index) =>
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
                </section>,
                <section class="thumbnail-list-container" key="thumbnail">
                  <div class="thumbnail-list">
                    {images && images.map((img, index) =>
                      <span class={'thumbnail-container ' + (index === currentSlide ? 'active' : '')}
                            key={index} data-target={`#${carouselId}`} data-slide-to={index}>
                        <div style={{ backgroundImage: `url('${img}')`}} key={index}/>
                      </span>
                    )}
                  </div>
                </section>
              ]:
              <div class="no-detail-images">
                <div class="no-img-text">No Images</div>
              </div>}
            </div>
            <div class="detail-information">
              {title.housing && <h2 class="detail-housing">
                {title.housing.map((tag, index) =>
                  <span class="badge badge-info" key={index}>
                  {tag.type !== 'ft2' ? (tag.text + tag.type) :
                    <span>{tag.text + 'ft'}<sup>2</sup></span>
                  }
                  </span>
                )}
              </h2>}
              <h2>{title.text}</h2>
              <h2><span class="badge badge-warning">{title.price}</span></h2>
              <h4>{title.location}</h4>
            </div>
          </section>

          {/** Detail Maps */}
          <div class="detail-map-container">{map &&
            <Map bootstrapURLKeys={{key: env.GOOGLE_MAP_API_KEY}} zoom={map.accuracy < 11 ? 11 : map.accuracy} center={{ lat: map.lat, lng: map.lng }}>
              <Mark lat={map.lat} lng={map.lng} />
            </Map>}
          </div>

          {/** Detail Contents */}
          <Card.Content>
            {content && content.map((paragraph, index) => (<p key={index}>{paragraph}</p>) )}
          </Card.Content>
        </Card>
      </div> :
      <section class="py-5">
        <Loader active inverted size="big">Loading...</Loader>
      </section>
  }
}

function mapStateToProps(state){
  return { detail: state.detail }
}

export default connect(mapStateToProps, {})(Detail);
