import React from 'react'
import {TitleText, BookCardWrapper, BookHeaderWrapper, BookImageWrapper} from '../styles/bookShelfStyles'

export default function BookCard(props) {

    const displayBookHeader = (title, author) => {
        return (
            <BookHeaderWrapper>
                <TitleText>{title}</TitleText>
                <TitleText>{author}</TitleText>
            </BookHeaderWrapper>
        );
    }

    const displayBookImage = (imageId) => {
        const source='http://covers.openlibrary.org/b/id/'+imageId+'-M.jpg';
        let imageError=false;
        return (
                <BookImageWrapper>
                   {!imageError && <img src={source} onError={imageError=true}/>}
                   {imageError && <div>Image Unavailable</div>}
                </BookImageWrapper>
        );
    }

    return (
        <BookCardWrapper>
            {displayBookImage(props.cover_i)}
            {displayBookHeader(props.title, props.author_name)}
            {props.children}
        </BookCardWrapper>
    )
}
