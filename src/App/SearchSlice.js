import { createSlice } from '@reduxjs/toolkit'

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
      searchType: "generate-episode",
    },
    reducers: {
        setSearchType(state, action){
            state.searchType = action.payload;
        }
    },
})

export const { setSearchType } = searchSlice.actions
export default searchSlice.reducer