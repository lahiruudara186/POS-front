import React from 'react';
import * as icons from 'react-icons/ai';

export const sideBarData = [
    {
        tab_name: "Shop Profile",
        redirect_path:"/profile",
        icon: <icons.AiFillShop className='nav-icon'/>,
        cName: 'nav-text'
       
    },

    {
        tab_name: "Add Item",
        redirect_path:"/additem",
        icon: <icons.AiFillPlusCircle/>,
        cName: 'nav-text'
    },
       
    {
        tab_name: "Order",
        redirect_path:"/",
        icon: <icons.AiOutlineShoppingCart/>,
        cName: 'nav-text'
    },
       
    {
        tab_name: "Inventory",
        redirect_path:"/inventory",
        icon: <icons.AiFillAppstore/>,
        cName: 'nav-text'
       
    },

]

export default sideBarData;