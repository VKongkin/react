import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from '../Main/Layout';
import Home from '../Main/Home';
import { Contact } from '../Main/Contact';
import { Bloge } from '../Main/Bloge';
export const NavbarAll = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path='Contact' element={<Contact />}></Route>
                    <Route path='Bloge' element={<Bloge />}></Route>
                   
                </Route>
            </Routes>

        </BrowserRouter>

    )
}
