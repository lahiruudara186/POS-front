import React, { useState } from 'react';
import * as icons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import './navbar.css';
import { IconContext } from 'react-icons'; 
import sideBarData from './navbardata';


function Sidebar() {
  const [sideBarDrawer, setComponantsToNavigationBar]= useState(false);

  const displaySideBar = () => setComponantsToNavigationBar(!sideBarDrawer);

  const [cart,setCart]=useState([]);

  return(
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <icons.AiOutlineMenu onClick={displaySideBar}/>
          
        </Link>
        <h1 className='nav-title'>The POS</h1>
        {/* <Link to="#" className="menu-bars">
          <icons.AiFillShopping onClick={displaySideBar}/>
          <span>{cart.length}</span>
          
        </Link> */}
      </div>

     <nav className={sideBarDrawer ? 'nav-menu active': 'nav-menu'}>
      <ul className="nav-menu-items" onClick={displaySideBar}>
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <icons.AiOutlineClose/>
          </Link>
        </li>

        {sideBarData.map((item,index)=>{
          return(
            <li key={index} className={item.cName}>
              <Link to={item.redirect_path}>
                {item.icon} 
                <span>{item.tab_name}</span>
              </Link>
            </li>
          );
        })}

      </ul>
     </nav>

    </IconContext.Provider>
    </>
  )
}

export default Sidebar;
