import { createApp } from 'vue';
//createApp is a factory function that when called gives us a new Vue application
import { createStore } from 'vuex';

import App from './app.vue';
//in order to render app.vue component as main component for application, need to 1) import App component from app.vue
//Q: is app.vue already auto-exporting everything and that's the default, so could in theory name "App" anything since it's not named?

const app = createApp(App);
// 2) then pass this file to createApp function
const store = createStore({
    state () {
        return {
            count: 0
        };
    },
    mutations: {
        changeCount (state, value) {
            state.count += value;
        }
        // changeCount(stateObject, value you pass to the mutation when you call the mutation which in this case is the -1 and 1 within counter.vue)

    }
    // actions: {},
    // getters: {}
});
//createStore takes an argument that's an object that takes multiple properties
//state () {} is a function that returns an object that represents all of the data being saved in the store
//mutations is an object with methods or functions bound to properties of this object that when called are going to mutate the state object (this is needed because you can't directly mutate a value saved within a store)
//actions is an object of methods (asynchronous usually) that call mutations that change the state
//getters are functions that extract some value or compute some value from the state

app.use(store);
//this lets us access store.otherInfo from other components, it lets us use it

app.mount('#app')
//need to mount it in the DOM, similar to React
// 3) then we're mounting it to the DOM


//to render something to the application, we need to create a root component

//a vuex store is essentially a place where the data is going to be saved and can be accessed and mutated from multiple components
//remember to have vuex package installed!