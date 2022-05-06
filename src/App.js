import React, { Suspense } from 'react';
import { GlobalStyles } from './styles/GlobalStyles';
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';

import { Home } from './pages/Home';
import { Details } from './pages/Details';
// import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NotFound } from './pages/NotFound';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Context from './Context';

const Favs = React.lazy(() => import('./pages/Favs'))

export const App = () => {
    return (
        <Suspense fallback={<div/>}>
        <BrowserRouter>    
            <GlobalStyles />
            <Logo />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/detail/:detailId' element={<Details />} />
                <Route path='/pet/:id' element={<Home />} />
                <Route element={<NotFound />} default />
                </Routes>

                <Context.Consumer>
                    {
                        ({ isAuth }) => 
                            isAuth 
                                ? <Routes>
                                    <Route path='/favs' element={<Favs />} />
                                    <Route path='/User' element={<User />} />
                                </Routes>
                                : <Routes>
                                    <Route path='/favs' element={<NotRegisteredUser />} />
                                    <Route path='/user' element={<NotRegisteredUser />} />
                                    </Routes>
                    }
                </Context.Consumer>
                <NavBar />
        </BrowserRouter>
        </Suspense>
    )
}