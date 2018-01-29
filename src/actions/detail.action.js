import axios from 'axios';

export const GET_DETAIL = "GET_DETAIL";
export function getDetail(link){

  function payload(link){
    return new Promise((resolve, reject) => {
      axios.get(env.debug ? `${env.data}detail.json` : `${env.api}housing-detail/`, {
        params: { link },
        cache: true
      }).then((res) => {
        resolve(res.data)
      })
    });
  }

  return {
    type: GET_DETAIL,
    payload: payload(link)
  };
};
