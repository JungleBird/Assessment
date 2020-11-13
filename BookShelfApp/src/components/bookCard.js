import React from 'react'
import {TitleText, BookHeaderWrapper, BookImageWrapper} from '../styles/bookShelfStyles'

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
        const source = 'http://covers.openlibrary.org/b/id/'+imageId+'-M.jpg';
        return (
                <BookImageWrapper>
                    <img src={source}/>
                </BookImageWrapper>
        );
    }

    return (
        <div>
            {displayBookImage(props.cover_i)}
            {displayBookHeader(props.title, props.author_name)}
        </div>
    )
}
