import { useDispatch } from "react-redux"
import { changeView, deleteMovie } from "../../store/movie"
import Button from "../Button"

const DeleteMoviePopup = ({className = "", id}) => {

    const dispatch = useDispatch()

    return(
        <div className={`list-movie__movie-item-add-popup ${className} `}>
            <div className="list-movie__movie-item-add-popup-content">
                <h3>Filmi silmek istediğinize emin misiniz? </h3>
                <div>
                    <Button text="Evet" onClick={()=>dispatch(deleteMovie(id))} />
                    <Button text="Hayır" onClick={()=> dispatch(changeView())} />
                </div>
            </div>
        </div>
    )
}

export default DeleteMoviePopup