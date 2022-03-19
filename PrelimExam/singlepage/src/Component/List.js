import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png'
import '../Css/listStyle.css';


const List = () => {
    return (
        <>
        <header>
            <div className='container container-flex'>
            <div className='logocontainer'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <nav>
                <div className='list'>
                    <NavLink exact to="/" className="listItem" activeClassName="activeItem">Home</NavLink>
                    <NavLink to="/about" className="listItem" activeClassName="activeItem">About</NavLink>
                    <NavLink to="/contact" className="listItem" activeClassName="activeItem">Characters</NavLink>
                    <NavLink to="/services" className="listItem" activeClassName="activeItem">Teyvat</NavLink>

                </div>
            </nav>
            
            </div>
        </header>
        </>
    )
}
export default List;
