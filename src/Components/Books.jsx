import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Books = () => {
const [books,setBooks]=useState([])
// console.log(books)
useEffect(()=>{
    fetch('books.json')
    .then(res=>res.json())
    .then(data=>setBooks(data))
},[])

    return (
        <div className='mt-20'>
            <div><h1 className='text-4xl playfair text-center font-bold text-black'>Books</h1></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {
books.map(book=><BookCard key={book.
    bookId
    } book={book}></BookCard>)
            }
            </div>
        </div>
    );
};

export default Books;