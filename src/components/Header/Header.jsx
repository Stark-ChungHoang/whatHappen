import { Link } from "react-router-dom"
import IconLogo from "../../img/logo@3x.png"
import { FaBars} from "react-icons/fa"
export default function Header({click,handleClick}) {
    return (
        <header className="header">
                <nav className="navbar">
                    <div className="navbar__logo">
                    <Link to="abc"><img src={IconLogo} alt="" /></Link>
                    </div>
                    <div className="navbar_icon">
                        <FaBars onClick={handleClick}  />
                    </div>
                    <div className="navbar__menu">
                        
                            <ul className="navbar__menu__items">
                                    <Link to=""><li className="navbar__menu__items--li"> Introduction </li></Link>
                                    <Link to=""><li className="navbar__menu__items--li"> solution </li></Link>
                                    <Link to=""><li className="navbar__menu__items--li"> Rate plan </li></Link>
                                    <Link to=""><li className="navbar__menu__auth--li"> login </li></Link>
                                     <Link to=""><li className="navbar__menu__auth--li"> Apply for free use </li></Link>
                            </ul>
        
                    </div>
                </nav>
        </header>
    )
}





