import { configureStore } from "@reduxjs/toolkit";
import movie from './movie'

const store = configureStore({
    reducer:{
        movie,
    }
})

export default store

