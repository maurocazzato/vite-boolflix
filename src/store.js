import { reactive } from 'vue'

export const store = reactive({
    movieList: [],
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=123bae22e0fcb1dd0ada73205c9079c5&query=movies&include_adult=false&language=en-it",
    searchText: "",


})
