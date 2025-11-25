import React from 'react';
import NavBar from '../../Componenta/Header/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../Componenta/Footer/Footer';

const Root = () => {
    return (
        <div className=' max-w-6xl mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;