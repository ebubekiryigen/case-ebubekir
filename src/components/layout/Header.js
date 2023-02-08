import { NavLink } from "react-router-dom"

const Header = () =>{
    return(
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/">Anasayfa</NavLink></li>
                    <li><NavLink to="/movie">Filmler</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header