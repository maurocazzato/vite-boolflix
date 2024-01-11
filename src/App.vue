<script>
import appHeader from "./components/appHeader.vue";
import appSearch from "./components/appSearch.vue";
import movieCard from "./components/movieCard.vue";

export default {
    name: "app",
    components: {
        appHeader,
        appSearch,
        movieCard,
    },
};
</script>

<template>
    <appHeader />
    <appSearch />
    <movieCard />
</template>


<style lang="scss">
@use './styles/partials/_variables' as *;
@use './styles/_general.scss' as *;
</style>
