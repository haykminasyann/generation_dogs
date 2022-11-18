import { createSlice } from "@reduxjs/toolkit";
import initialState from './initialState';
import { fetchBreedsThunk,fetchImagesThunk,fetchSubBreedsThunk } from "./thunks";

const dogsSlice = createSlice({
    name: 'dogs',
    initialState,
    reducers: {
        addDog: (state, {payload}) => {
            state.dogs = [...state.dogs, payload];
            state.activeItem = payload
            state.images = []
        },
        changeActiveItem: (state, {payload}) => {
            state.activeItem = payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchBreedsThunk.pending, (state)  => {
            state.loading = true
            state.error = ''
        })
        .addCase(fetchBreedsThunk.fulfilled, (state, {payload})  => {
            state.loading = false
            state.breeds = payload
            state.error = ''
        })
        .addCase(fetchBreedsThunk.rejected, (state, {payload})  => {
            state.loading = false
            // state.error = payload
        })
        .addCase(fetchSubBreedsThunk.pending, (state)  => {
            state.loading = true
            state.error = ''
        })
        .addCase(fetchSubBreedsThunk.fulfilled, (state, {payload})  => {
            state.loading = false
            state.subBreeds = payload
            state.error = ''
        })
        .addCase(fetchSubBreedsThunk.rejected, (state, {payload})  => {
            state.loading = false
            // state.error = payload
        })
        .addCase(fetchImagesThunk.pending, (state)  => {
            state.loading = true
            state.error = ''
        })
        .addCase(fetchImagesThunk.fulfilled, (state, {payload})  => {
            state.loading = false
            state.images = payload
            state.error = ''
        })
        .addCase(fetchImagesThunk.rejected, (state, {payload})  => {
            state.loading = false
            // state.error = payload
        })
    }
})

export default dogsSlice.reducer;
export const {addDog, changeActiveItem} = dogsSlice.actions;