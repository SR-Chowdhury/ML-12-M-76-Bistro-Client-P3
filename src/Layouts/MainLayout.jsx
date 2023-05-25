import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default MainLayout;