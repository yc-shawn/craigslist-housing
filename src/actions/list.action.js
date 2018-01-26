import axios from 'axios';

export const GET_LIST = "GET_LIST";
export function getList(link){

  function payload(link){
    return new Promise((resolve, reject) => {
      axios.get(env.debug ? `${env.data}list.json` : `${env.api}housing-list/`, {
        params: { link }
      }).then((res) => {
        let detailsPromise = [];
        let list = res.data;
        list.forEach((item) => {
          detailsPromise.push(axios.get(env.debug ? `${env.data}detail.json` :`${env.api}housing-detail/`, {
            params: {link: item.link},
            cache: true
          }))
        })
        Promise.all(detailsPromise).then((results) => {
          for (let i = 0; i < results.length; i++) {
            list[i].detail = results[i].data;
          }
          resolve({link, list})
        })
      })
    });
  }

  return {
    type: GET_LIST,
    payload: payload(link)
  };
};
