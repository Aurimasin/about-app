import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/index';
import Content from '../Modules/index';
import Footer from './Components/Footer/index'

export default () => (
    <BrowserRouter>
        <div>
            <Header />
            <Content />
            <Footer/>
        </div>
    </BrowserRouter>
);