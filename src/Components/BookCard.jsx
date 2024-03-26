import React from 'react';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
    // console.log(book)
    const{bookName,bookId,
        category,image,
        publisher,rating,
        tags,author,
        yearOfPublishing,
        
totalPages

        }=book
    return (
        <Link to={`/bookDetails/${bookId}`}>
        <div className='mb-32'>
        <div className="card w-96  border mt-11 p-5 ">
  <figure className="px-10 pt-10 bg-base-300 rounded-b-xl">
    <img  src={image} alt="Book" className="rounded-xl mb-7 " />
  </figure>
  <div className="card-body  ">
    <div>
        <ul className='flex gap-4   work text-[#23BE0A]'>
            {
            tags.map(tag=><li className='bg-base-200 px-2 rounded-lg'>{tag}</li>)
            }
        </ul>
    </div>
    <h2 className="card-title playfair text-3xl text-black mt-2">{bookName}</h2>
    <p className='work'>By: {author}</p>
    <hr  className='h-2 mt-4 mb-4'/>
    
<div className='work flex justify-between'>
    <div>{category}</div>
    <div className='flex gap-1'>
        <h1>{rating}</h1>
        <img className='' src="https://i.ibb.co/Yy56tSk/Frame.png" alt="" />
    </div>
</div>
<hr  className='h-2 mt-4 mb-4'/>
  </div>
</div>  
        </div>
        </Link>
    );
};

export default BookCard;