import React from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
    return <div>
        <StylesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/pricing' element={<Pricing />}></Route>
                    <Route path='/' element={<Landing />}></Route>
                </Routes>
            </BrowserRouter>
        </StylesProvider>
    </div>
}