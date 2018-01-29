import axios from 'axios';

export const GET_LIST = "GET_LIST";
export function getList(link){

  function payload(link){
    return new Promise((resolve, reject) => {
      axios.get(env.debug ? `${env.data}list.json` : `${env.api}housing-list/`, {
        params: { link },
        cache: true
      }).then((res) => {
        let list = res.data;
        resolve({link, list})
      })
    });
  }

  return {
    type: GET_LIST,
    payload: payload(link)
  };
};
