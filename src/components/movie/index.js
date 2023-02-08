import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useMemo, useState } from "react"
import MovieList from "./MovieList"
import { uniqueArraySort, uniqueFragmentArray } from "../../core/utils/extension"
import { filterArray, listMovie } from "../../core/utils/movieFilter"
import Button from "../Button"

const Movie = () =>{
    const [params] = useSearchParams()
    const text = params.get('text')
    const movie = useSelector(state=> state.movie.list)
    const listedMovie = listMovie(movie)
    const [filterYear, setFilterYear] = useState(0)
    const [filterVote, setFilterVote] = useState(0)
    const [filterGenre, setFilterGenre] = useState('')
    const movieFiltred = useMemo(()=> (
            filterArray(listedMovie,text,filterVote,filterYear,filterGenre)
        ),[text,listedMovie,filterVote,filterYear,filterGenre])
    const backToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return(
        <div className="list-movie__content">
            <div className="list-movie__content-filter">
                <div className="list-movie__content-filter-search">
                    <p><span>{text}</span> İçin Sonuçlar</p>
                    <p><span>{movieFiltred.length}</span> film bulundu</p>
                </div>
                <div className="list-movie__content-filter-option">
                    <select onChange={e=>setFilterGenre(e.target.value)}>
                        <option value="0">Film Türü</option>
                        {uniqueFragmentArray(movie.map(item=> item.Genre.replace(/\s/g, '').split(','))).map((item,index)=>(
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                    <select onChange={e=>setFilterYear(e.target.value)}>
                        <option value="0">Film Yılı</option>
                        {uniqueArraySort(movie.map(data=>new Date(data.DVD).getFullYear())).map((item,index)=>(
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                    <select onChange={e=>setFilterVote(e.target.value)}>
                        <option value="0">IMDB Puanı</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
            <div className="list-movie__movie">
                <MovieList item={movieFiltred} />
            </div>
            {movieFiltred.length >= 3 && (
                <div className="back-to-top">
                    <Button onClick={backToTop} text="Başa Dön" />
                </div>
            )}
        </div>
    )
}

export default Movie