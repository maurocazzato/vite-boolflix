<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "movieCard",
    data() {
        return {
            store,
        }
    },
    methods: {
        getFilm() {
            axios
                .get(store.apiUrl)
                .then((res => {
                    store.movieList = res.data.results;
                    console.log(res.data.results);
                }))

        }
    },
    created() {
        this.getFilm()
    }


};
</script>

<template>
    <div>
        <div v-for="movie in movieList" :key="movie.id" class="card mb-3">
            <img :src="results[0].ibackdrop_path" alt="" />
            <img :src="backdrop_path" alt="">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">Titolo Originale: {{ movie.original_title }}</p>
            <p class="card-text">Lingua: {{ movie.original_language }}</p>
            <p class="card-text">Voto: {{ movie.vote_average }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins.scss' as *;

.card {
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
}

.card:hover {
    transform: scale(1.02);
}
</style>