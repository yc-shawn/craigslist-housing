import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { switchArea } from '../actions/area.action';

class Container extends Component {
  constructor(props){
    super(props);
  }
  onSwitchArea(area){
    this.props.switchArea(area);
    this.props.history.replace('/')
  }
  render(){
    let { switchArea, area } = this.props;
    let currentAreaName = 'SF bay area';
    if (area.currentArea){
      for (var i = 0; i < area.areas.length; i++) {
        if (area.currentArea.area === area.areas[i].abbr){
          currentAreaName = area.areas[i].name;
          break;
        }
      }
    }
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">ychen</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-global" aria-controls="navbar-global" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-global">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/"><i class="fa fa-home" aria-hidden="true"/> Home <span class="sr-only">(current)</span></Link>
              </li>
            </ul>
            <ul class="navbar-nav my-2 my-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {currentAreaName}
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  {area && area.areas.map((region, index) =>
                    <a class="dropdown-item" key={index} onClick={()=>this.onSwitchArea(region.abbr)}>{region.name}</a>
                  )}
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" onClick={()=>this.onSwitchArea('all')}>Whole SF bay area</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <main id="app" style={{ backgroundImage: `url('${env.assets}img/landing-background.jpg')`}}>
          { this.props.children }
        </main>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { area: state.area }
}

export default withRouter(connect(mapStateToProps, {switchArea})(Container));
