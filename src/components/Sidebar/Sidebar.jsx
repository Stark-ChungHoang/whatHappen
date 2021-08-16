import React from 'react'
import { Link } from 'react-router-dom'
import { MdCancel} from "react-icons/md"
function Sidebar({click,handleClick}) {
    return (
        <aside className={click ? "sidebar" : "sidebar__hidden"}>
                <div className="sidebar__icon">
                        < MdCancel onClick={handleClick} />
                    </div>
                    <div className="sidebar__menu">
                        
                            <ul className="sidebar__menu__items">
                                    <Link to=""><li className="sidebar__menu__items--li"> Introduction </li></Link>
                                    <Link to=""><li className="sidebar__menu__items--li"> solution </li></Link>
                                    <Link to=""><li className="sidebar__menu__items--li"> Rate plan </li></Link>
                                    <Link to=""><li className="sidebar__menu__items--li"> login </li></Link>
                                     <Link to=""><li className="sidebar__menu__items--li"> Apply for free use </li></Link>
                            </ul>
        
                    </div>
        </aside>
    )
}

export default Sidebar
