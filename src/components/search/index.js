import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate  } from "react-router-dom"
import { changeViewSearch } from "../../store/movie"
import Button from "../Button"
import { Icon } from "../Icon"
import Input from "../Input"
import AddMoviePopup from "./Popup"

const Search = () => {

    const {popUpViewSearch} = useSelector(state => state.movie)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [params,setParams] = useState('')
    const filterParams = (e) => {
        const value = e.target.value
        setParams(value.replace(/[^a-zA-Z0-9 ]/g, ''))
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            params.trim().length <= 0 ? alert('Lütfen Aranacak Kelimeyi Yazınız') : navigate(`/movie?text=${params}`);
        }
    }

    return(
        <div className="search-content">
            <div className="search-content__list">
                <Button text="Film Ekle +"  onClick={()=>{dispatch(changeViewSearch())}} />
                <NavLink to="/movie" >Film Listesi</NavLink>
            </div>
            <div className="search-content__search">
                <div className="search-content__search-icon" onClick={()=>params.trim().length <= 0 && alert('Lütfen Aranacak Kelimeyi Yazınız')} >
                    <NavLink to={`${params.trim().length > 0 ? '/movie?text='+ params.replace(/[^a-zA-Z0-9 ]/g, '') : ''}`}><Icon name="search" /></NavLink>
                </div>
                <Input placeholder="Bulmak istediğiniz filmin adını yazınız" onKeyPress={handleKeyPress} value={params} onChange={filterParams} /> 
            </div>
            <AddMoviePopup name="movie" onClick={()=>{dispatch(changeViewSearch())}}  className={popUpViewSearch === 1 ? 'view' : ''} />
        </div>
    )
}

export default Search