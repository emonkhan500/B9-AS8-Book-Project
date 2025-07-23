import React, { useEffect, useState } from 'react';

import { getReadBooks } from '../LocalStorage/LocalStorage';
import ShowRead from './ShowRead';


const Read = () => {
     const [books, setBooks] = useState([]);
    console.log(books)
    useEffect(() => {
      const data=getReadBooks()
        setBooks(data)
    }, []);

   const handleSort = (sortCriteria) => {
        console.log(sortCriteria)
        let sortedBooks = [...books];
    
        if (sortCriteria === "rating") {
            sortedBooks.sort((a, b) => b.rating - a.rating);
        } else if (sortCriteria === "totalPages") {
            sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
        } else if (sortCriteria === "yearOfPublishing") {
            sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
        }
       
        setBooks(sortedBooks);
    };
    return (
        <div>
            <div className='text-center'><details className="dropdown ">
               <summary className="m-1 px-6 py-3 rounded-lg bg-[#23BE0A] hover:bg-[#23BE0Aac] active:scale-95 text-white text-lg font-semibold">Sort By</summary>
               <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                   <li onClick={() => handleSort("rating")}><a>Rating</a></li>
                   <li onClick={() => handleSort("totalPages")}><a>Number of Pages</a></li>
                   <li onClick={() => handleSort("yearOfPublishing")}><a>Published year</a></li>
               </ul>
           </details></div>
            {
                books.map(book=><ShowRead book={book}></ShowRead> )
            }
        </div>
    );
};

export default Read;