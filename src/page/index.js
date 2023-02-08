import Search from "../components/search";
import './index.scss'
import { useEffect } from "react"
import { fetchMovie } from "../store/movie"
import { useDispatch } from "react-redux"

function Home() {

    const dispatch = useDispatch()

    useEffect( ()=> {
    if(!localStorage.getItem('movie')) {
        dispatch(fetchMovie())
    }
    },[])

    return(
        <>
        <section className="search">
            <Search />
        </section>
        </>
    )
}

export default Home