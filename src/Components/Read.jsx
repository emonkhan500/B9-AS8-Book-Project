import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getReadBooks } from '../LocalStorage/LocalStorage';
import ShowRead from './ShowRead';


const Read = () => {
    // const books=useLoaderData()
    const [readBook,setReadBook]=useState([])
    
    useEffect(()=>{
        const storedBook=getReadBooks()
        setReadBook(storedBook)
    },[])
    return (
        <div>
            {
                readBook.map(book=><ShowRead book={book}></ShowRead> )
            }
        </div>
    );
};

export default Read;