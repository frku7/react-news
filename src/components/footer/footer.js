import "./footer.css"
import { useContext } from "react"
import { ThemeContext } from "../../context/Themecontext"

export function Footer() {
const { theme } = useContext(ThemeContext)


    return(
        <footer className={theme} >

            <div className="footer-item" >
                <i class="fa-brands fa-tiktok"></i>
                tiktak
            </div>
            <div className="footer-item" >
               <i class="fa-brands fa-youtube"></i>
                youtube
            </div>
            <div className="footer-item" >
               <i class="fa-brands fa-instagram"></i>
                instagram
            </div>
        </footer>
    )
}