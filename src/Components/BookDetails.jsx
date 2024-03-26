import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getReadBooks, readBooks, saveWishlist } from '../LocalStorage/LocalStorage';

const BookDetails = () => {
const[read,setRead]=useState([])

    const books=useLoaderData()
    const {id}=useParams()
    
    const idInt= parseInt(id)
    const selectedBook=books?.find((book)=>book.bookId===idInt)
    // console.log(books,id,idInt,selectedBook)
    const {bookName,bookId,
        category,image,
        publisher,rating,
        tags,author,
        yearOfPublishing,
        review,
totalPages}=selectedBook||{};

const handleRead=(selectedBook)=>{
  const exist=read?.find(book=>book.bookId=== selectedBook.bookId)
  if(exist){
    toast('agei ashe')
  }
  else{
   const reads= readBooks(selectedBook)
   setRead(reads)
    toast("Great!! You Have Read It");
  }
  
}
const handleWishList=()=>{
  saveWishlist(selectedBook)
  toast("Added To Your WishList");
}

    return (
        <div className=''>
           <div className="card card-side shadow-xl ">
  <figure><img className='w-[475px] h-[564px] bg-base-300 rounded-xl mb-7 mt-7 ml-9 p-11' src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl playfair">{bookName}</h2>
    <p>By: {author}</p>
    <hr  className='h- mt- mb-'/>
    <p className='text-xl'>{category}</p>
    <hr  className='h-2 mt- mb-'/>

<p><span className='font-bold work'>Review: </span>{review}</p>

<div className='flex gap-2'><span className='font-bold work'>Tag: </span>
        <ul className='flex gap-4   work text-[#23BE0A]'>
            {
            tags?.map((tag)=><li className='bg-base-200 px-2 rounded-lg'>{tag}</li>)
            }
        </ul>
    </div>
    <hr  className='h-2 mt- mb-'/>
    <div><p>Number of Pages:   <span className='font-bold'>{totalPages}</span></p></div>
    <p>Publisher:     <span className='font-bold'>{publisher}</span></p>
    <p>Year of Publishing:    <span className='font-bold'>{yearOfPublishing}</span></p>
    <p>Rating:    <span className='font-bold'>{rating}</span></p>
    <div className="card-actions gap-3 mt-2 ">
      <button onClick={()=>handleRead(selectedBook)} className="btn ">Read</button>
      <button onClick={handleWishList} className="btn btn-info">Wishlist</button>
    </div>
  </div>
</div> 
<ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetails;