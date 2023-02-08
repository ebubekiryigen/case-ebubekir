import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useParams } from "react-router-dom"
import { lastDigitDotRemove } from "../../core/utils/extension"
import { changeTitle, changeVote } from "../../store/movie"
import { Icon } from "../Icon"
import Input from "../Input"

const DetailMovieComponent = () => {
    const {id} = useParams()
    const movie = useSelector(state=> state.movie.list)
    const dispatch = useDispatch()
    const selectMovie = movie.filter((item)=> item.id === +id)
    const [vote, setVote] = useState(selectMovie[0]?.imdbRating)

    const filterVoteHandler = (id,vote) => {
        let x = lastDigitDotRemove(vote)
        setVote(x)
        dispatch(changeVote({id:id, value:x}))
    }
    const filterVoteChange = (e) =>{
        if(e.target.value > 10) {
            return console.log('puan 10 dan büyük olamaz')
        }
        if(e.target.value.length > 3) {
            return console.log('en fazla 3 heneli bir değer atayabilirsiniz')
        }
        if(isNaN(+e.target.value)) {
            return console.log('sadece sayısal değerler girilebilir')
        }
        setVote(e.target.value)
    }

    return(
        <div className="movie-detail__content">
        {selectMovie.length > 0 ? selectMovie.map((item,index)=> (
            <div className="movie-detail__content__item" key={index}>
                <div className="movie-detail__content__item__image">
                    <img width="100%" src={item.Poster} alt={item.Title} />
                </div>
                <div className="movie-detail__content__item__text">
                    <textarea value={item.Title} onChange={(e)=>dispatch(changeTitle({id:item.id, value:e.target.value}))}  />
                    <span><Icon name="star"  /><span><Input type="text" value={vote} onChange={filterVoteChange} max="10" onBlur={(e)=>filterVoteHandler(item.id, e.target.value)}  /></span>/10</span>
                    <p>Dil: <span>{item.Language}</span></p>
                    <p>Oyuncular: <span>{item.Actors}</span></p>
                    <p>{item.Plot}</p>
                </div>
            </div>
        )):<div className="film-not-found"><p>Film Bulunamadı</p> <NavLink to="/movie">Filmlere dön</NavLink></div> }
        </div>
    )
}

export default DetailMovieComponent