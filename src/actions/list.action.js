import axios from 'axios';

export const GET_LIST = "GET_LIST";
export function getList(link){

  function payload(link){
    return new Promise((resolve, reject) => {
      axios.get(env.debug ? `${env.data}list.json` : `${env.api}housing-list/`, {
        params: { link }
      }).then((res) => {
        console.log(res.data);
        resolve({link, list: res.data})
      }).error((err) => {
        reject({link, list: []})
      })
    });
  }

  return {
    type: GET_LIST,
    payload: Promise.resolve(payload(link))
  };
};
