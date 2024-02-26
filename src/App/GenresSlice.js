import { createSlice } from '@reduxjs/toolkit'

export const genresSlice = createSlice({
    name: 'genres',
    initialState: {
      selectedGenres: "",
    },
    reducers: {
        setSelectedGenres(state, action){
            state.selectedGenres = action.payload;
        }
    },
})

export const { setSelectedGenres } = genresSlice.actions
export default genresSlice.reducer