import { createApp } from 'vue';
//createApp is a factory function that when called gives us a new Vue application

import App from './app.vue';
//in order to render app.vue component as main component for application, need to 1) import App component from app.vue
//Q: is app.vue already auto-exporting everything and that's the default, so could in theory name "App" anything since it's not named?

const app = createApp(App);
// 2) then pass this file to createApp function


app.mount('#app')
//need to mount it in the DOM, similar to React
// 3) then we're mounting it to the DOM


//to render something to the application, we need to create a root component