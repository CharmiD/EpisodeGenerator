const ENDPOINTS = {
  GET_POPULAR_SHOWS: (page) => 
  `tv/popular?language=en-US&page=${page}`,

  GET_SEARCHED_SHOWS: (searchValue) =>
    `search/tv?query=${searchValue}&include_adult=false&language=en-US&page=1`,

  GET_SHOW_DETAILS: (showId) =>
    `tv/${showId}?append_to_response=aggregate_credits&language=en-US`,

  GET_EPISODE_DETAILS: (showId, seasonNum, episodeNum) =>
    `tv/${showId}/season/${seasonNum}/episode/${episodeNum}?language=en-US`,

  GET_GENRES: () => 
  `genre/tv/list?language=en`,

  GET_SHOWS_BY_GENRE: (genreIds) => 
  `discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_origin_country=US&with_genres=${genreIds}`,

  GET_SIMILAR_SHOWS: (showId,page) => 
  `tv/${showId}/similar?language=en-US&page=${page}'`,

  GET_TRENDING_SHOWS: (page) =>
  `trending/tv/week?language=en-US&page=${page}`,
};

export default ENDPOINTS;
