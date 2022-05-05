import React, {Fragment} from 'react';
import { useParams } from 'react-router-dom';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

export const Home = () => {
    //   const { id } = props.match.params
    const params = useParams()
    return (
        <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={params.categoryId} />
        </Fragment>
    )
    }