import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { ListOfPhotoCard } from './components/ListOfPhotoCard';
import { Logo } from './components/Logo';


export const App = () => (
    <div>
        <GlobalStyles />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCard />
    </div>
);

