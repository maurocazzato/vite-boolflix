<script>
import appHeader from './components/appHeader.vue';




export default {
    name: "app",
    components: {
        appHeader,

    },

};
</script>

<template>
    <appHeader />
</template>


<style lang="scss">
@use './styles/partials/_variables' as *;
@use './styles/_general.scss' as *;
</style>
