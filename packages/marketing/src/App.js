import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
});

export default () => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/pricing' element={<Pricing />}></Route>
                        <Route path='/' element={<Landing />}></Route>
                    </Routes>
                </BrowserRouter>
            </StylesProvider>
        </div>
    );
}