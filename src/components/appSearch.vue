
<script>
export default {
    name: "appSearch",
    data() {
        return {
            searchText: '',
        };
    },
    methods: {
        async search() {
            try {
                const response = await this.$axios.get(
                    `https://api.themoviedb.org/3/search/multi?api_key=123bae22e0fcb1dd0ada73205c9079c5&query=${this.searchText}&include_adult=false&language=en-it`
                );

                const movies = response.data.results.filter(item => item.media_type === 'movie');

                this.$emit('updateMovieList', movies, 'movies');

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
};
</script>

<template>
    <div class="search-bar">
        <input v-model="searchText" placeholder="Cerca film" />
        <button @click="search">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins.scss' as *;

.search-bar {
    display: flex;
    gap: 10px;

    input {
        padding: 5px;
    }

    button {
        padding: 5px 10px;
        background-color: rgba(223, 21, 27, 255);
        color: #fff;
        border: none;
        cursor: pointer;
    }
}
</style>