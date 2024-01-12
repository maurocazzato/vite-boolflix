<script>
export default {
    name: "movieCard",
    props: {
        movie: Object,
    },
    data() {
        return {
            showDetails: false,
        };
    },
    methods: {
        getMoviePosterUrl(posterPath) {
            if (posterPath) {
                const baseUrl = 'https://image.tmdb.org/t/p/';
                // Dimensione 
                const size = 'w342';
                // URL completo
                return `${baseUrl}${size}${posterPath}`;
            } else {
                // nel caso in cui la posterPath non sia disponibile
                return 'https://via.placeholder.com/342x513?text=No+Image';
            }
        },
        convertRatingToStars(rating) {
            // Arrotonda il voto 
            const roundedRating = Math.ceil(rating);

            const maxStars = 5;
            // array di stelle in base al voto
            const starsArray = Array.from({ length: maxStars }, (_, index) => index < roundedRating);

            //  stampa le stelle
            return starsArray.map(isFilled => (isFilled ? '★' : '☆')).join('');
        },

    },
};
</script>

<template>
    <div class="movie-card" @mouseover="showDetails = true" @mouseleave="showDetails = false">
        <img :src="getMoviePosterUrl(movie.poster_path)" alt="" />
        <div v-if="showDetails" class="movie-details">
            <h3>{{ movie.title }}</h3>
            <p>{{ movie.original_title }}</p>
            <p>Lingua: {{ movie.original_language }}</p>
            <p>Voto: {{ convertRatingToStars(movie.vote_average) }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins.scss' as *;

.movie-card {
    position: relative;
    width: 200px;

    .movie-details {
        text-align: center;
        padding: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s;
    }

    &:hover .movie-details {
        opacity: 1;
    }
}
</style>