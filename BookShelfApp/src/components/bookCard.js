import React from 'react'
import {TitleText, BookCardWrapper, BookHeaderWrapper, BookImageWrapper} from '../styles/bookShelfStyles'

export default function BookCard(props) {

    const {title, author_name, cover_i} = props

    const displayBookHeader = () => {
        return (
            <BookHeaderWrapper>
                <TitleText>{title}</TitleText>
                <TitleText>{author_name}</TitleText>
            </BookHeaderWrapper>
        );
    }

    const displayBookImage = () => {
        const source='http://covers.openlibrary.org/b/id/'+cover_i+'-M.jpg';
        let imageError=false;
        return (
                <BookImageWrapper>
                   {!imageError && <img src={source} alt={title} onError={imageError=true}/>}
                   {imageError && <div>Image Unavailable</div>}
                </BookImageWrapper>
        );
    }

    return (
        <BookCardWrapper>
            {displayBookImage()}
            {displayBookHeader()}
            {props.children}
        </BookCardWrapper>
    )
}
