import axios from 'axios';

export const SWITCH_AREA = "SWITCH_AREA";
export function switchArea(area){

  function payload(area){
    return new Promise((resolve, reject) => {
      axios.get(env.debug ? `${env.data}housing.json`: `${env.api}housing/${area || 'all'}`,{
        cache: true
      }).then((res) => {
        resolve(res.data)
      })
    });
  }

  return {
    type: SWITCH_AREA,
    payload: payload(area)
  };
};
