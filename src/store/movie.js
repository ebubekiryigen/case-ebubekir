import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { alphanumeric } from "../core/utils/movieFormValidation";
import { movieServices } from "../services";

export const fetchMovie = createAsyncThunk('fetch/Movie', async () => {
    const response = await movieServices.getMovie('ava')
    return response
})

const  initialState = {
    loading : false,
    list:localStorage.getItem('movie') ? JSON.parse(localStorage.getItem('movie'))  :  [],
    error:'',
    popUpView:0,
    popUpViewSearch:0,
}

const movie = createSlice({
    name:'Movie',
    initialState,
    reducers:{
        addMovie:(state,action)=>{
            try {
                if(!action.payload.Title || !action.payload.imdbRating || !action.payload.DVD || !action.payload.Actors || !action.payload.Plot || !action.payload.Poster || !action.payload.Genre || !action.payload.Language ) {
                    throw new Error('Geçersiz Form')
                }
                const newMovieList = state.list = [
                    action.payload,
                    ...state.list
                ]
                localStorage.setItem('movie',JSON.stringify(newMovieList))
                state.popUpViewSearch = 0
                return alert("Başarıyla Eklendi")
            } catch (err) {
                console.log(err)
            }
        },
        changeView: state => {
            state.popUpView = state.popUpView === 0 ? 1 : 0
        },
        changeViewSuccess: state => {
            state.movieAddAlert = state.movieAddAlert === 0 ? 1 : 0
        },
        changeViewSearch: state => {
            state.popUpViewSearch = state.popUpViewSearch === 0 ? 1 : 0
        },
        deleteMovie: (state, action) => {
            try{
                const existMovie = state.list.find((item) => item.id === action.payload)
                if(!existMovie){
                    throw new Error("Film Bulunamadı")
                }
                const filtredMovieList = state.list = [
                    ...state.list.filter((item)=> item.id !== action.payload)
                ]
                localStorage.setItem('movie',JSON.stringify(filtredMovieList))
                state.popUpView = 0
            }catch(err){
                console.log(err)
            }
        },
        changeTitle: (state,action) => {
            try {
                if(action.payload.value.length > 255) {
                    throw new Error('maksimum 255 karakter girebilirsiniz')
                }
                if(alphanumeric(action.payload.value) === false) {
                    throw new Error('sadece alfanümerik değerler girebilirsiniz')
                }
                const changeTitleMovie = state.list = [
                    ...state.list.map((item) => {
                        if(item.id === action.payload.id) {
                            item.Title = action.payload.value
                        }
                        return item
                    } ),
                ]
                localStorage.setItem('movie', JSON.stringify(changeTitleMovie))
            } catch (error) {
                console.log(error)
            }
        },
        changeVote: (state,action) => {
            try {
                const number = +action.payload.value
                if(action.payload.value > 10) {
                    throw new Error('en fazla 10 değeri verilebilir')
                }
                if(isNaN(number)) {
                    throw new Error('sadece sayısal değerler girilebilir')
                }
                const changeVoteMovie = state.list = [
                    ...state.list.map((item) => {
                        if(item.id === action.payload.id) {
                            item.imdbRating = action.payload.value.substr(0,3)
                        }
                        return item
                    }),
                ]
                localStorage.setItem('movie', JSON.stringify(changeVoteMovie))
            } catch (error) {
                console.log(error)
            }
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchMovie.pending, (state)=>{
            state.loading = true
        })
        builder.addCase(fetchMovie.fulfilled, (state,action)=>{
            state.loading = false
            state.list = action.payload
            localStorage.setItem('movie',JSON.stringify(action.payload))
            state.error = ''
        })
        builder.addCase(fetchMovie.rejected, (state,action)=>{
            state.loading = false
            state.list = []
            state.error = action.error.message
        })
    },
})

export const {addMovie,changeView,deleteMovie,changeTitle,changeVote,changeViewSearch,changeViewSuccess} = movie.actions
export default movie.reducer

