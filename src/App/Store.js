import { configureStore } from '@reduxjs/toolkit'
import searchReducer from "./SearchSlice";
import genresReducer from "./GenresSlice"

export default configureStore({
  reducer: {
    search: searchReducer,
    genres: genresReducer,
  },
})