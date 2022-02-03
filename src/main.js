import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

if ('production' === process.env.NODE_ENV && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
