import React from 'react';
import { useParams } from 'react-router-dom';
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery';
import { Layout } from '../components/Layout';

export const Details = () => {
    const params = useParams(); 
    return (
        <Layout title={`Fotografía 1🐶🐾`}>
            <PhotoCardWithQuery id={params.detailId} />
        </Layout>
    )    
}