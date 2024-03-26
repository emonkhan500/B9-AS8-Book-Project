import React from 'react';
import { Link } from 'react-router-dom';

const ShowRead = ({book}) => {
    console.log(book)
    const {bookName,bookId,
        category,image,
        publisher,rating,
        tags,author,
        yearOfPublishing,
        review,
totalPages}=book;
    return (
        <div>
             <div className="card card-side shadow-xl ">
  <figure><img className=' bg-base-300 rounded-xl mb-7 mt-7 ml-9 p-11' src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl playfair">{bookName}</h2>
    <p>By: {author}</p>
    <hr  className='h- mt- mb-'/>
    <p className='text-xl'>{category}</p>
    <hr  className='h-2 mt- mb-'/>

<p><span className='font-bold work'>Review: </span>{review}</p>

<div className='flex gap-8'><span className='font-bold work'>Tag: </span>
        <ul className='flex gap-4   work text-[#23BE0A]'>
            {
            tags?.map((tag)=><li className='bg-base-200 px-2 rounded-lg'>{tag}</li>)
            }
        </ul>
        <p> <span className='font-bold'>Year of Publishing:</span>  {yearOfPublishing}</p>
    </div>

    <div className='flex gap-8  mt-4'>
        <div><p>Number of Pages:   <span className='font-bold'>{totalPages}</span></p></div>
    <div>
    <p>Publisher:     <span className='font-bold'>{publisher}</span></p>
    </div>
    </div>
    <hr  className='h-2 mt- mb-'/>
    
    <div className='flex gap-4'>

    <div><p className='bg-[#328EFF] py-1 px-2 rounded-xl'>Category: <span className='font-bold'>{category}</span></p></div>
    <div><p className='bg-[#FFAC33]  py-1 px-2 rounded-xl'>Rating:<span className='font-bold'>{rating}</span></p></div>
   <Link to={`/bookDetails/${bookId}`}>
   <div> <button  className="bg-[#23BE0A] text-white py-1 px-2 rounded-xl">View Details</button></div>
   </Link>
    </div>
    
    
  </div>
</div> 
        </div>
    );
};

export default ShowRead;