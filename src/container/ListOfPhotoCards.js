import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { whitPhotos } from '../hoc/withPhotos';

export const ListOfPhotoCards = ({
    categoryId
}) => {
    const { loading, error, data } = whitPhotos(categoryId)
    if(error) {
        return <h2>Interval Server Error</h2>
    }
    if(loading) {
        return <h2>Loading...</h2>
    }
    return(
        <ul>
        {data.photos.map((photo) => (
            <PhotoCard key={photo.id}
            {...photo} />
        ))}
    </ul>
    )
}