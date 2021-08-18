import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import IconLogo from "../../img/logo@3x.png"
import { FaBars} from "react-icons/fa"
export default function Header({handleClick,user,logout}) {
    return (
        <header className="header">
                <nav className="navbar">
                    <motion.div
                        initial={{x:'-100vw'}}
                        animate={{x:0}}
                        transition={{type: 'spring', duration: 1,bounce:0.3,}}
                    className="navbar__logo">
                    <Link to="/"><img src={IconLogo} alt="" /></Link>
                    </motion.div>
                    <div className="navbar_icon">
                        <FaBars onClick={handleClick}  />
                    </div>
                    <div className="navbar__menu">
                        
                            <ul className="navbar__menu__items">
                                    <Link to=""><li className="navbar__menu__items--li"> Introduction </li></Link>
                                    <Link to=""><li className="navbar__menu__items--li"> solution </li></Link>
                                    <Link to=""><li className="navbar__menu__items--li"> Rate plan </li></Link>
                                   {user ? 
                                    ( <Link to="/" onClick={() => logout()}><li className="navbar__menu__auth--li"> logout</li></Link>)
                                    : 
                                    ( <Link to="/login"><li className="navbar__menu__auth--li"> login </li></Link>)
                                    }
                                     <Link to=""><li className="navbar__menu__auth--li"> Apply for free use </li></Link>
                            </ul>
        
                    </div>
                </nav>
        </header>
    )
}





