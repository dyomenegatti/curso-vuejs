import Vue from 'vue';
import axios from 'axios';

// axios.defaults.baseURL = 'https://curso-vue-dm-default-rtdb.firebaseio.com/'
// axios.defaults.headers.common['Authorization'] = 'abc123'
// axios.defaults.headers.get['Accepts'] = 'application/json'
// Headers em axios de forma global 

Vue.use({
  install(Vue) {
    // Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-dm-default-rtdb.firebaseio.com/',
      headers: {
        "Authorization": "abc123"
      }
    }) 

    Vue.prototype.$http.interceptors.request.use(config => {
      console.log(config.method)
      // if(config.method == 'post') {
      //   config.method = 'put'
      // }
      // Altera um método post para put
      return config
    }, error => Promise.reject(error))

    Vue.prototype.$http.interceptors.response.use(res => {
      // const array = []
      // for(let chave in res.data) {
      //   array.push({ id: chave, ...res.data[chave] })
      // }

      // res.data = array
      return res
    }, error => Promise.reject(error))
  }
})