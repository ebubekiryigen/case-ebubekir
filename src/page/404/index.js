import { NavLink } from "react-router-dom";
import './404.scss'

function PageNotFound(){
    return(
        <section className="page-not-found">
            Sayfa Bulunamadı  <NavLink to="/">Anasayfaya git</NavLink> 
        </section>
    )
}

export default PageNotFound