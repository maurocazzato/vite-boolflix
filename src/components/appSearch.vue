<script>
export default {
    name: "appSearch",
    data() {
        return {
            searchText: "",
        };
    },
    methods: {
        searchMovies() {
            this.$emit("search", this.searchText);
        },
    },
};
</script>

<template>
    <div class="input-group mb-3">
        <input v-model="searchText" type="text" class="form-control" placeholder="Cerca film...">
        <button @click="searchMovies" class="btn btn-primary">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins.scss' as *;
</style>