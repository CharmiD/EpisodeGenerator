import ENDPOINTS from "./EndPoints";

const BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTc0ZTIzYWNkZjYzODFmYmY3ZDJlMTNiMjY3NTg2YSIsInN1YiI6IjY1NzhkZjI2ZWM4YTQzMDEzN2ZmZTNiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YUSyVyq25CiKD7gNnqvgTucsHY1ZJnOnYjvokcmDQ4U",
    },
  };

class ApiManager {
    static getPopularShows = (page) => {
        const url = BASE_URL + ENDPOINTS.GET_POPULAR_SHOWS(page);
        return fetch(url, options);
    };

    static getSearchedShows = (searchValue) => {
        const url = BASE_URL + ENDPOINTS.GET_SEARCHED_SHOWS(searchValue);
        return fetch(url, options);
    }

    static getShowDetails = (showId) => {
        const url = BASE_URL + ENDPOINTS.GET_SHOW_DETAILS(showId);
        return fetch(url, options);
    }

    static getEpisodeDetails = (showId, seasonNum, episodeNum) => {
        const url = BASE_URL + ENDPOINTS.GET_EPISODE_DETAILS(showId, seasonNum, episodeNum);
        return fetch(url, options);
    }

    static getGenres = () => {
        const url = BASE_URL + ENDPOINTS.GET_GENRES();
        return fetch(url, options);
    }

    static getShowsByGenres = (genreIds) => {
        const url = BASE_URL + ENDPOINTS.GET_SHOWS_BY_GENRE(genreIds);
        return fetch(url, options);
    }

    static getSimilarShows = (showId) => {
        const url = BASE_URL + ENDPOINTS.GET_SIMILAR_SHOWS(showId);
        return fetch(url, options);
    }
};

export default ApiManager;