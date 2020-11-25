<template>
    <section>
        <h1>{{ message }}</h1>
        <h3>Hola mundo!</h3>
    </section>
</template>

<!-- in order to access what's being returned within the script tags, must use {{  }} and the key name -->
<!-- any property bound to the component itself can be directly accesed, no need for "this" -->

<script>
    export default {
        data () {
            return {
                message: 'Hello World'
            };
        }
    }
</script>
<!-- in object that you're exporting, you have a property "data" that is a function that returns an object that holds properties available elsewhere in the component and in the template itself -->
<!-- only export ONE default object that has all of the definitions of the Vue js component (ex: single object can have data function, methods, computed properties, other components that can be used within the template, etc) -->

<style lang="scss" >
    @import './app.scss'
</style>

// OR  <style lang="scss" src="./app.scss"></style>
// OR can write styles directly within the style tags