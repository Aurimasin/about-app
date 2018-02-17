import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './Components/Header/index';
import Content from '../Modules/index';
import Footer from './Components/Footer/view'

export default () => (
    <BrowserRouter>
        <div>
            <Header />
            <Content />
            <Footer/>
        </div>
    </BrowserRouter>
);