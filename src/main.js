import { createApp } from 'vue';
//createApp is a factory function that when called gives us a new Vue application

const app = createApp();

app.mount('#app')
//need to mount it in the DOM, similar to React

//to render something to the application, we need to create a root component