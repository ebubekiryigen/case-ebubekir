
import Button from "../Button"
import { Icon } from "../Icon"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addMovie } from '../../store/movie'
import { randomId } from "../../core/utils/extension"
import Input from "../Input"
import { formValidation } from "../../core/utils/movieFormValidation"

const AddMoviePopup = ({ className = "", onClick }) => {

    const [errors, setErrors] = useState({})
    const [submit, setSubmit] = useState(false)
    const [form,setForm] = useState({
            id:randomId(),
            Title:"",
            imdbRating:"",
            Poster:"",
            Plot:"",
            DVD:"",
            Actors:"",
            Genre:"",
            Language:""
        })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]:value})
    }

    const movieHandleSubmit = (e) => {
        e.preventDefault()
        setSubmit(true)
        setErrors(formValidation(form))
        for (let key in form) {
            if (typeof form[key] === 'string') {
                form[key] = form[key].trim()
            }
        }
    }
    useEffect(()=>{
        if(Object.keys(errors).length === 0 && submit) {
            dispatch(addMovie(form))
            setForm({
                id:randomId(),
                Title:"",
                imdbRating:"",
                Poster:"",
                Plot:"",
                DVD:"",
                Actors:"",
                Genre:"",
                Language:""
            })
            setSubmit(false)
        } else {
            setSubmit(false)
        }
    },[errors,submit,dispatch])

    console.log(Date.parse('asfasfasfas'))

    return (
        <div className={`search-content__add-popup ${className} `}>
            <div className="search-content__add-popup__content">
                <form onSubmit={movieHandleSubmit}>
                    <div className="form-element">
                        <div className="d-flex">
                            <Input placeholder="Film Adı" max="255" name="Title" value={form.Title} onChange={handleChange} />
                        </div>
                        <div className="error">
                            {errors.Title && errors.Title}
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="d-flex">
                            <Input placeholder="IMDB Puanı" type="number" name="imdbRating"  max="10" value={form.imdbRating} onChange={handleChange} />
                        </div>
                        <div className="error">
                            {errors.imdbRating && errors.imdbRating}
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="d-flex">
                            <Input type="date" name="DVD" onChange={handleChange} />
                        </div>
                        <div className="error">
                            {errors.DVD && errors.DVD}
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="d-flex">
                            <Input placeholder="Film Görseli" value={form.Poster} name="Poster" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="d-flex">
                            <Input placeholder="Oyuncular" value={form.Actors} name="Actors" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="d-flex">
                            <Input placeholder="Türü (Birden fazla var ise , ile ayırın)" value={form.Genre} name="Genre" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-element">
                        <div className="d-flex">
                            <Input placeholder="Dili" value={form.Language} name="Language" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-element full">
                        <div className="d-flex">
                            <Input placeholder="Film Kısa Açıklama" value={form.Plot} name="Plot" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-element">
                        <Button type="submit" text="Film Ekle" />
                        <div className="error">
                            {errors.form && errors.form}
                        </div>
                    </div>
                </form>
                <div className="search-content__add-popup__content__icon" onClick={onClick}>
                    <Icon name="times" />
                </div>
            </div>
        </div>
    )
}

export default AddMoviePopup