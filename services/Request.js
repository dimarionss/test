import axios from "axios"
const api = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:9001';

export default {
  async klaviyoIdentify(data) {
    let res = await axios.post(api+'/klaviyo/identify', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async klaviyoDubaiQuiz(data) {
    let res = await axios.post(api+'/klaviyo/dubai', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async klaviyoEvent(data) {
    let res = await axios.post(api+'/klaviyo/event', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async konnektive(data, endpoint) {
    let res = await axios.post(`${api}/konnektive?endpoint=${endpoint}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  }
}