<template lang="pug">
  #app
    app-header
    .content_view
        app-sidebar
        router-view
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';

export default {
    components: {
        AppHeader,
        AppSidebar,
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

.content_view {
    max-width: 1240px;
    margin: auto;
    display: flex;
    margin-top: 40px;
}
</style>
