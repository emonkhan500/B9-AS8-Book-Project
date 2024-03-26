import React, { useEffect, useState } from 'react';
import { getWishList } from '../LocalStorage/LocalStorage';
import ShowWish from './ShowWish';

const Wish = () => {
    const [wishBook,setWishBook]=useState([])
    
    useEffect(()=>{
        const wishBook=getWishList()
        setWishBook(wishBook)
    },[])

    return (
        <div>
            {
                wishBook.map(book=><ShowWish book={book}></ShowWish>)
            }
        </div>
    );
};

export default Wish;