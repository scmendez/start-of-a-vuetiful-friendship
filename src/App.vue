<template>
    <section>
        <h1>{{ message.toUpperCase() }}</h1>
        <h3>Hola mundo!</h3>
        <input type="text" placeholder="Your message..." v-model="message" />
        <br />
        <h1>The current count is {{ $store.state.count }}</h1>
        <!-- <Counter v-bind:count="value" v-on:update:count="value = $event"/> -->
        <Counter />
    </section>
</template>

<!-- in order to access what's being returned within the script tags, must use {{  }} and the key name -->
<!-- any property bound to the component itself can be directly accesed, no need for "this" -->

<!-- to create a two-way binding between the input value and value saved in component, use v-model attribute/directive -->

<!-- in Vue, to pass a dynamic value down to a child component, use v-bind directive-->

<!-- $event is the result of the second argument passed from the emit method in counter.vue-->

<!-- the info for value is now being saved in the app component rather than the counter component, so now the app component has access to it and now you can render it within this component-->

<script>
import Counter from './components/counter';
    export default {
        data () {
            return {
                message: 'Hello World',
                value: 1
            };
        },
        components: {
            Counter
        }
    }
</script>
<!-- in object that you're exporting, you have a property "data" that is a function that returns an object that holds properties available elsewhere in the component and in the template itself -->
<!-- only export ONE default object that has all of the definitions of the Vue js component (ex: single object can have data function, methods, computed properties, other components that can be used within the template, etc) -->

<!-- since the name of the variable holding the reference to the counter is the same as the name of the property to be placed in this object, can say Counter instead of Counter: Counter -->
<!-- when within Script and importing + adding to components list, MUST PascalCase-->

<!-- saving the value of count in the app component itself. we pass it down to the Counter component (in template) and from counter.vue it accepts it as a prop and renders it -->

<style lang="scss" >
    @import './app.scss'
</style>

// OR  <style lang="scss" src="./app.scss"></style>
// OR can write styles directly within the style tags