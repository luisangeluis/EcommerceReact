import React from 'react';
import {Outlet} from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <header>soy header</header>
            <main>
                <Outlet />
            </main>
            <footer>soy footer</footer>
        </>

    )
}

export default MainLayout