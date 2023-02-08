import Movie from "../../components/movie"
import './movie.scss'
import { useEffect } from "react"
import { fetchMovie } from "../../store/movie"
import { useDispatch } from "react-redux"

function ListMovie() {

  const dispatch = useDispatch()

  useEffect(() => {
    if(!localStorage.getItem('movie')) {
        dispatch(fetchMovie())
    }
  },[])

  return(
    <section className="list-movie">
      <Movie />
    </section>
  )
}

export default ListMovie