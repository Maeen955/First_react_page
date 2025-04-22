//  const api_key = "api_key=8606ef484f58bd55f2a294854ce00b11"
//const API_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=8606ef484f58bd55f2a294854ce00b11&language=en-us";

import axios from "axios"

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = "api_key=8606ef484f58bd55f2a294854ce00b11"


const getTrendingVideos = axios.get(movieBaseUrl + '/trending/all/day?'+ api_key)

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?';

const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL+api_key+"&with_genres="+id)


export default{
    getTrendingVideos,
    getMovieByGenreId
}