import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: r => r(App)
});

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then(r => {
        console.log('service worker registered in scope: ', r.scope);
      })
      .catch(e => console.log('SW error: ', e));
  });
}
