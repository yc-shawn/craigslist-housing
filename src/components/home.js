import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
  constructor(){
    super();
    this.state = { housing: {"area":"","ban":{"name":"housing","link":"/d/housing/search/hhh"},"cats":[{"name":"apts / housing","link":"/d/apts-housing-for-rent/search/apa"},{"name":"housing swap","link":"/d/housing-swap/search/swp"},{"name":"housing wanted","link":"/d/all-housing-wanted/search/hsw"},{"name":"office / commercial","link":"/d/office-commercial/search/off"},{"name":"parking / storage","link":"/d/parking-storage/search/prk"},{"name":"real estate for sale","link":"/d/real-estate/search/rea"},{"name":"rooms / shared","link":"/d/rooms-shares/search/roo"},{"name":"rooms wanted","link":"/d/room-share-wanted/search/sha"},{"name":"sublets / temporary","link":"/d/sublets-temporary/search/sub"},{"name":"vacation rentals","link":"/d/vacation-rentals/search/vac"}]} };
  }
  // componentWillMount(){
  //   axios.get(`${env.api}housing/`).then(res => {
  //     this.setState({ housing: res.data });
  //   })
  // }

  render(){
    let { ban, cats } = this.state.housing;
    console.log(this.state.housing);
    let CatItem = (props) => {
      return (
        <div class={'housing-cat-item ' + props.classNmae}>
          <a href={props.item.link}>{props.all && 'all the '} {props.item.name}</a>
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
