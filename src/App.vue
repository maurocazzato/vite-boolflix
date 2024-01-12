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
    data() {
        return {
            movieList: [],
        };
    },
    methods: {
        updateMovieList(results, type) {

            if (type === 'movies') {
                this.movieList = results;
            } else {

            }
        }
    },
};
</script>

<template>
    <div id="app">
        <header>
            <appHeader />
            <appSearch @updateMovieList="updateMovieList" />
        </header>
        <!-- <div class="sezione">
            <h1>Film</h1>
        </div> -->
        <main>
            <movieCard v-for="movie in movieList" :key="movie.id" :movie="movie" />
        </main>
    </div>
</template>


<style lang="scss">
@use './styles/partials/_variables' as *;
@use './styles/_general.scss' as *;

body {
    margin: 0;
    font-family: 'Arial', sans-serif;
}

header {
    background-color: rgba(0, 0, 2, 255);
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

main {
    background-color: rgba(0, 0, 2, 255);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
}

.sezione {
    background-color: rgba(0, 0, 2, 255);
    padding: 5px;
}

h1 {
    color: white;
    font-size: 30px;
    margin-left: 20px;
}
</style>
