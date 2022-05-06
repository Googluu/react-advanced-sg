import React from 'react';
import { useParams } from 'react-router-dom';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
import { Helmet } from 'react-helmet'
import { Layout } from '../components/Layout';


export const Home = () => {
    //   const { id } = props.match.params
    const params = useParams()
    return (
        <Layout title="Petgram - Tu app de fotos de mascotas" subtitle="Con petgram
        puedes encontrar fotos de animales dómesticos muy bonitos">
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.categoryId} />
        </Layout>
    )
}