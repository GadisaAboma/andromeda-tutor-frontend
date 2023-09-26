import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import searchTutorsService from "./searchTutorsServices";


const initialState = {
    tutors: [],
    isLoading: false,
    isError : false,
    isSuccess: false,
    message: ''
}


export const searchTutors = createAsyncThunk('tutor/get-tutors', async(_, thunkAPI) => {
   
    try {
        const token = thunkAPI.getState().auth.user.token
      return await searchTutorsService.searchTutors(token)
    } catch(err) {
      
        const message = err.response.data.error || (err.response && err.response.data && err.response.data.message) || err.message || err.toString()
        return thunkAPI.rejectWithValue(err.response.data.error)
    }
})


export const searchTutorSlice = createSlice({
    name: "searchTutors",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false
            state.isSuccess = false
            state.message = false
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(searchTutors.pending, (state) => {
            state.isLoading = true
        })
       .addCase(searchTutors.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(searchTutors.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        
    }
})

export const { reset } = searchTutorSlice.actions
export default searchTutorSlice.reducer;
