import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Top from '../components/Top';
import Notification from '../components/Notification';
import Footer from '../components/Footer';

const MainRoot = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Top />
            <Header />
            <main className='grow'>
                <Outlet />
                {/* <Notification /> */}
            </main>
            <Footer />
        </div>
    )
};

export default MainRoot;