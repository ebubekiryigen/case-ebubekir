import { useDispatch, useSelector } from "react-redux"
import { Icon } from "../Icon"
import { changeView } from "../../store/movie"
import DeleteMoviePopup from "./Popup"
import { useState } from "react"
import { NavLink, useSearchParams } from "react-router-dom"
import { boldKeyword } from "../../core/utils/extension"

const MovieList = ({item}) => {

    const view  = useSelector(state=> state.movie.popUpView)
    const loading = useSelector(state=> state.movie.loading)
    const error = useSelector(state=> state.movie.error)
    const [params] = useSearchParams()
    const dispatch = useDispatch()
    const inParam = params.get('text')
    const [id, setId] = useState(false)
    const popupHandle = (id) =>{
        setId(id)
        dispatch(changeView())
    }
    return(
        <>
        {loading && <div>Filmler Yükleniyor...</div>}
        {!loading && error ? <div>{error}</div> : null}
        <div className="list-movie__movie">
        {!loading ? (
            item.length > 0 ? item.map((item,index)=>(
                <div className="list-movie__movie-item" key={index}>
                    <div className="list-movie__movie-item-image">
                        <img src={item.Poster} alt={item.Title} />
                        <div className="list-movie__movie-item-image-trash" onClick={()=>popupHandle(item.id)}>
                            <Icon name="trash" />
                            <p>SİL</p>
                        </div>
                    </div>
                    <div className="list-movie__movie-item-text">
                        <div className="list-movie__info">
                            <h3 className="movie-name" dangerouslySetInnerHTML={{__html:boldKeyword(item.Title,inParam) }} />
                            <span className="movie-rating"><Icon name="star"  /><span>{item.imdbRating}</span>/10</span>
                        </div>
                        <p>Dil: <span>{item.Language}</span></p>
                        <p>Oyuncular: <span>{item.Actors}</span></p>
                        <p>Çıkış Yılı: <span>{item.DVD}</span></p>
                        <p>{item.Plot.substr(0,500)} <span className="text-detail"> <NavLink to={`${item.id}`}>Detayları gör</NavLink></span></p>
                    </div>
                </div>
            )) : <div>Film Bulunamadı</div>
        ) : '' }
        </div>
        <DeleteMoviePopup className={view ? 'view' : ''} id={id} />
        </>
    )
}

export default MovieList