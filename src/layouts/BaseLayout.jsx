import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Main from './main/Main';

const BaseLayout=()=> {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default BaseLayout;
