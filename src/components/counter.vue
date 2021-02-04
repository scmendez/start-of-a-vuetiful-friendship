<template>
    <span>Current count is: {{ count }}</span>
    <button v-on:click="$emit('update:count', count - 1)">-</button>
    <button v-on:click="$emit('update:count', count + 1)">+</button>
</template>

<!-- not allowed to mutate a value that's being passed down as a prop, so can't use count++/count-- in button's v-on -->
<!-- must instead call a method that's available in any Vue component called $emit() that lets you emit an event up to the parent component -->
<!-- pass the change you want to happen in the second argument to the emit method -->
<!-- then in app.vue component, want to react to 'update' events for the count property (CAN mutate value within app component) -->

<script>
export default {
    props: {
        count: Number
    }
};
</script>

<!-- this component can take a prop called count and it must be a number -->

<style>

</style>