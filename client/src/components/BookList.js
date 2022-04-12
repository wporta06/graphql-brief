import React, { useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';


const BOOK_LIST = gql`
    {
        books {
            id,
            name,
            genre,
        }
    }
`

export const BookList = () => {
    const { loading, error, data } = useQuery(BOOK_LIST);
    const [books,setBooks] = useState([])

    useEffect(() => {

         if (data) {
            setBooks(data.books) ;      
        }
    }, [data])
    return (
        <div>
            <ul id="book-list">
                {books && books.map((e, i) => {
                    return (
                        <li key={i} >{e.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}

