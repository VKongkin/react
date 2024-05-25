
import React from 'react'
import { useState } from 'react';
import { Outlet, NavLink } from "react-router-dom";
import { Images } from '../Unit/Image';
import './Style.css';

const Navbar = () => {
    const [menu] = useState([
        {
            path: 'Intranet',
            name: 'Intranet'
        },
        {
            path: 'Students',
            name: 'Students'
        }
        , {
            path: 'Contact',
            name: 'Contact'
        },
        {
            path: 'Giving',
            name: 'Giving'
        },
        {
            path: 'Alumni',
            name: 'Alumni'
        },

    ]);
    return (
        <div>
            <div className=" flex items-center justify-around h-16 bg-lime-300
">
                <div className="logo w-{100px} ">
                    <img className=' h-36 ' style={{ color: "white" }} src={Images.Ait} alt="" />
                </div>
                <div className="title ">
                    <ul className='flex gap-3 items-center  menu'>
                        {
                            menu.map((menu, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={menu.path}>{menu.name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <Outlet />
                </div>

            </div>
        </div>
    )
}

export default Navbar