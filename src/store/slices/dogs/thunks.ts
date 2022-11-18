import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchBreeds,fetchSubBreeds,fetchImages } from "../../../services/dogs-service";

export const fetchBreedsThunk = createAsyncThunk<string[], undefined, {rejectValue: string}>("fetchBreedsThunk",async (_, { rejectWithValue }) => {
        return fetchBreeds()
            .then(({ data }) => Object.keys(data.message))
            .catch((e) => rejectWithValue(e.message));
    }
)

export const fetchSubBreedsThunk = createAsyncThunk<string[], string, {rejectValue: string}>("fetchSubBreedsThunk",async (data, { rejectWithValue }) => {
    return fetchSubBreeds(data)
        .then(({ data }) => data.message)
        .catch((e) => rejectWithValue(e.message));
    }
)

export const fetchImagesThunk = createAsyncThunk<string[], {breed: string, subBreed: string}, {rejectValue: string}>("fetchImagesThunk",async (data, { rejectWithValue }) => {
    const {breed, subBreed} = data
    return fetchImages(breed, subBreed)
        .then(({ data }) => data.message)
        .catch((e) => rejectWithValue(e.message));
    }
)