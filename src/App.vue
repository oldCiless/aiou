<template lang="pug">
  #app
    app-header
    router-view
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
    components: {
        AppHeader,
    },
};
</script>

<style lang="scss">
#app,
body {
    background-color: $backgroud--color;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Varela Round';
}
</style>
