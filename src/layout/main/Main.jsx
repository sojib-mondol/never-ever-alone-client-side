import React from 'react';
import Navbar from '../../pages/navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/footer/Footer';

const Main = () => {
    return (
        <div className="font-poppins bg-[#F8FFF9]">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;