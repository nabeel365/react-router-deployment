import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* things which will change according to route are included in outlet. */}

            {/* toast */}
            <Toaster />
        </div>
    );
};

export default Main;


