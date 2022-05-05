import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Article, ImgWrapper, Img } from './styles';
import {useNearScreen} from '../../hooks/useNearScreen';
import {useLocalStorage} from '../../hooks/useLocalStorage';

import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
    const [show, element] = useNearScreen()
    const { mutation, mutationLoading, mutationError } = ToggleLikeMutation()
    const key = `like-${id}`
    const [liked, setLiked] = useLocalStorage(key, false)

    
    const handleFavClick = () => {
        !liked && mutation({
          variables: {
            input: { id }
          }
        })
        setLiked(!liked)
      }
       // console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })
    return (
    <Article ref={element}>
        {
            show && <Fragment>
            <Link to={`/detail/${id}`}>
                <ImgWrapper>
                    <Img src={src} />
                </ImgWrapper>
            </Link>

            <FavButton
            liked={liked}
            likes={likes}
            onClick={handleFavClick}
            >
            </FavButton>

            {/* <ToggleLikeMutation>
                {
                    (toggleLike) => {
                        const handleFavClick = () => {
                        !liked && toggleLike({ variables: {
                            input: { id }
                        } })
                        setLiked(!liked)
                        }

                        return  <FavButton 
                        liked={liked} 
                        likes={likes} 
                        onClick={handleFavClick}/>

                    }
                }
            </ToggleLikeMutation>         */}
        </Fragment>
    }
        </Article>
    )
}